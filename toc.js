// Table of Contents (centralized list of chapters)
const toc = [
  { title: "PI Chapter 1", url: "PI-Chapter 1.html" },
  { title: "PI Chapter 2", url: "PI-Chapter 2.html" },
  { title: "PI Chapter 3", url: "PI-Chapter 3.html" }
  { title: "PI Chapter 4", url: "PI-Chapter 4.html" }
];

// Render TOC dropdown
function renderTOC(currentPage) {
  let html = `<select id="tocDropdown" onchange="goToChapter(this.value)">`;
  toc.forEach(chap => {
    const selected = chap.url === currentPage ? "selected" : "";
    html += `<option value="${chap.url}" ${selected}>${chap.title}</option>`;
  });
  html += `</select>`;
  return html;
}

// Navigate to selected chapter
function goToChapter(page) {
  window.location.href = page;
}
