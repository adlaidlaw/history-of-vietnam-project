// Table of Contents (centralized list of chapters)
const toc = [
  { title: "PI Chapter 1", url: "PI-Chapter 1.html" },
  { title: "PI Chapter 2", url: "PI-Chapter 2.html" },
  { title: "PI Chapter 3", url: "PI-Chapter 3.html" },
  { title: "PI Chapter 4", url: "PI-Chapter 4.html" },
  { title: "PII Chapter 1", url: "PII-Chapter 1.html" },
  { title: "PII Chapter 2", url: "PII-Chapter 2.html" },
  { title: "PII Chapter 3", url: "PII-Chapter 3.html" },
  { title: "PII Chapter 4", url: "PII-Chapter 4.html" },
  { title: "PII Chapter 5", url: "PII-Chapter 5.html" },
  { title: "PII Chapter 6", url: "PII-Chapter 6.html" },
  { title: "PIII Chapter 1", url: "PIII-Chapter 2.html" },
  { title: "PIII Chapter 2", url: "PIII-Chapter 2.html" },
];

function renderTOC() {
  let html = `
    <input type="checkbox" id="tocToggle">
    <label for="tocToggle" class="toc-label">Table of Contents</label>
    <nav class="toc-menu"><ul>`;
  toc.forEach(ch => {
    html += `<li><a href="${ch.url}">${ch.title}</a></li>`;
  });
  html += `</ul></nav>`;
  return html;
}
