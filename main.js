(function () {
  const data = window.ZERJ_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function issueUrl(issue) {
    return `issue-${issue.id}.html`;
  }

  function newestIssues() {
    return [...data.issues].sort((a, b) => Number(b.id) - Number(a.id));
  }

  function imageMarkup(issue, className = "") {
    if (issue.image) {
      return `<img class="${className}" src="${issue.image}" alt="ZERJ Magazine Issue ${issue.id} cover featuring ${issue.model}">`;
    }
    return `<div class="cover-placeholder ${className}"><span>Issue ${issue.id}</span><strong>${issue.model}</strong></div>`;
  }

  function renderHome() {
    const issues = newestIssues();
    const latest = issues[0];
    const latestTarget = $("#latest-feature");
    const coverGrid = $("#cover-grid");
    const editorialGrid = $("#editorial-grid");
    const archiveGrid = $("#issue-archive-grid");
    const modelsList = $("#models-list");

    if (latestTarget) {
      latestTarget.innerHTML = `
        <a class="latest-cover" href="${issueUrl(latest)}">${imageMarkup(latest)}</a>
        <div class="latest-story">
          <p class="eyebrow">Latest Cover / Issue ${latest.id}</p>
          <h1>${latest.title}</h1>
          <h2>${latest.model}</h2>
          <a class="button" href="${issueUrl(latest)}">Read Feature</a>
        </div>
      `;
    }

    if (archiveGrid) {
      archiveGrid.innerHTML = `
        ${issues.slice(1, 7).map((issue) => issueCard(issue)).join("")}
        <a class="archive-cta" href="archive.html">Browse the Full Archive &rarr;</a>
      `;
    }

    if (coverGrid) {
      coverGrid.innerHTML = issues
        .filter((issue) => issue.type === "Cover Feature")
        .map((issue) => issueCard(issue))
        .join("");
    }

    if (editorialGrid) {
      editorialGrid.innerHTML = issues
        .filter((issue) => issue.type === "Full Editorial Feature")
        .map((issue) => issueCard(issue))
        .join("");
    }

    if (modelsList) {
      modelsList.innerHTML = issues
        .map((issue) => `<a href="${issueUrl(issue)}"><span>Issue ${issue.id}</span>${issue.model}</a>`)
        .join("");
    }
  }

  function renderArchive() {
    const archiveGrid = $("#full-archive-grid");
    if (!archiveGrid) return;
    archiveGrid.innerHTML = newestIssues().map((issue) => issueCard(issue)).join("");
  }

  function issueCard(issue) {
    return `
      <article class="issue-card">
        <a class="issue-image" href="${issueUrl(issue)}">${imageMarkup(issue)}</a>
        <div class="issue-card-copy">
          <p class="eyebrow">Issue ${issue.id} / ${issue.type}</p>
          <h3>${issue.model}</h3>
          <p>${issue.title}</p>
          <a class="read-link" href="${issueUrl(issue)}">Read Feature</a>
        </div>
      </article>
    `;
  }

  function creditValue(issue, label) {
    const match = issue.credits.find((credit) => credit.toLowerCase().startsWith(label.toLowerCase()));
    return match ? match.split(":").slice(1).join(":").trim() : "";
  }

  function featureHeadline(issue) {
    return `${issue.model} on ${issue.title}, Presence, and the Power of Being Seen`;
  }

  function featureDate(issue) {
    const dates = {
      "001": "June 1, 2026",
      "002": "June 8, 2026",
      "003": "June 15, 2026",
      "004": "June 22, 2026",
      "005": "June 29, 2026",
      "006": "July 7, 2026"
    };
    return dates[issue.id] || "Summer 2026";
  }

  function coverLook(issue) {
    const designer = creditValue(issue, "Designer") || creditValue(issue, "Style") || "the featured designer";
    const modelCredit = issue.credits.find((credit) => credit.toLowerCase().startsWith("model:")) || `${issue.model}`;
    return `${modelCredit.replace("Model: ", "")} appears in ${designer}. The look is shaped around ${issue.subtitle.toLowerCase()}, balancing polished fashion detail with the presence of a collectible cover. <em>Fashion Editor: ZERJ Magazine.</em> Photographed by ZERJ. ZERJ Magazine, Summer 2026.`;
  }

  function storyCopy(issue) {
    return `<p class="story-copy">Behind the cover, ${issue.model} moves with the kind of calm that makes an image feel immediate. The room, the styling, and the light all gather around one idea: presence does not have to announce itself loudly to be unforgettable. In this feature, ${issue.title.toLowerCase()} becomes more than a headline; it becomes the mood of the sitting, the rhythm of the pose, and the reason the portrait holds its own after the first look.</p><p>Through the lens of ZERJ, the story leans into fashion as a personal language. Every gesture is measured, every detail has room to breathe, and the image becomes a conversation between confidence, softness, and control.</p>`;
  }

  function shootGalleryImages(issue) {
    const images = issue.gallery.length ? issue.gallery : [issue.image];
    return Array.from({ length: 6 }, (_, index) => images[index % images.length]);
  }

  function renderIssue() {
    const page = document.body.dataset.issue;
    if (!page) return;

    const issue = data.issues.find((item) => item.id === page);
    if (!issue) return;

    const visibleCredits = issue.credits.filter((credit) => {
      const label = credit.split(":")[0].trim().toLowerCase();
      return !["location", "style", "gear"].includes(label);
    });

    document.title = `Issue ${issue.id} | ${issue.model} | ZERJ Magazine`;
    $("#issue-root").innerHTML = `
      <section class="feature-hero accent-${issue.accent}">
        <div class="feature-intro">
          <p class="eyebrow">Magazine</p>
          <h1>${featureHeadline(issue)}</h1>
          <div class="feature-byline">
            <span>By ZERJ Magazine</span>
            <span>Photography by ZERJ</span>
            <span>${issue.credits[1] || `Model: ${issue.model}`}</span>
          </div>
          <p class="feature-date">${featureDate(issue)}</p>
        </div>
        <div class="feature-media">
          <div class="feature-cover">${imageMarkup(issue)}</div>
          <section class="cover-look-section">
            <p class="kicker">Cover Look</p>
            <p>${coverLook(issue)}</p>
          </section>
        </div>
      </section>
      <section class="article-layout story-layout">
        <article class="article-body">
          ${storyCopy(issue)}
        </article>
        <aside class="credit-card story-credits">
          <p class="eyebrow">Credits</p>
          ${visibleCredits.map((credit) => `<span>${credit}</span>`).join("")}
        </aside>
      </section>
      <section class="qa-section">
        <div class="section-heading">
          <p class="eyebrow">Interview</p>
          <h2>Model Q&A</h2>
        </div>
        ${issue.interview.map(([question, answer]) => `
          <article class="qa-item">
            <h3>${question}</h3>
            <p>${answer}</p>
          </article>
        `).join("")}
      </section>
      <section class="gallery-section">
        <div class="section-heading">
          <p class="eyebrow">Photo Gallery</p>
          <h2>From the Shoot</h2>
        </div>
        <div class="gallery-grid shoot-gallery-grid">
          ${shootGalleryImages(issue).map((src, index) => `
            <button class="lightbox-trigger shoot-gallery-item" data-image="${src}" aria-label="Open gallery image ${index + 1}">
              <img src="${src}" alt="${issue.model} gallery image ${index + 1}">
            </button>
          `).join("")}
        </div>
      </section>
      <section class="related-section">
        <div class="section-heading">
          <p class="eyebrow">Related Issues</p>
          <h2>More ZERJ Features</h2>
        </div>
        <div class="related-grid">
          ${newestIssues().filter((item) => item.id !== issue.id).slice(0, 3).map(issueCard).join("")}
        </div>
      </section>
    `;
  }

  function renderPhotography() {
    const grid = $("#photo-grid");
    const filters = $("#photo-filters");
    if (!grid || !filters) return;

    const categories = ["All", ...new Set(data.photography.map((item) => item.category))];
    filters.innerHTML = categories.map((category, index) => `
      <button class="${index === 0 ? "active" : ""}" data-filter="${category}">${category}</button>
    `).join("");

    function draw(category = "All") {
      grid.innerHTML = data.photography
        .filter((item) => category === "All" || item.category === category)
        .map((item) => `
          <button class="portfolio-item lightbox-trigger" data-image="${item.image}">
            <img src="${item.image}" alt="${item.title}">
            <span>${item.category}</span>
            <strong>${item.title}</strong>
          </button>
        `)
        .join("");
      bindLightbox();
    }

    filters.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      $$("#photo-filters button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      draw(button.dataset.filter);
    });

    draw();
  }

  function bindLightbox() {
    const lightbox = $("#lightbox");
    if (!lightbox) return;
    const img = $("img", lightbox);
    $$(".lightbox-trigger").forEach((button) => {
      button.addEventListener("click", () => {
        img.src = button.dataset.image;
        lightbox.classList.add("open");
      });
    });
  }

  function setupLightbox() {
    const lightbox = $("#lightbox");
    if (!lightbox) return;
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target.closest("[data-close]")) {
        lightbox.classList.remove("open");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") lightbox.classList.remove("open");
    });
    bindLightbox();
  }

  function setupCompactHeader() {
    const header = $(".site-header");
    if (!header) return;

    const update = () => {
      header.classList.toggle("is-compact", window.scrollY > 160);
      header.classList.toggle("is-nav-hidden", window.scrollY > 520);
      header.classList.toggle("is-announcement-hidden", window.scrollY > 520);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  renderHome();
  renderArchive();
  renderIssue();
  renderPhotography();
  setupLightbox();
  setupCompactHeader();
})();
