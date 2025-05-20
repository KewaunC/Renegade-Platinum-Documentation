
function setupSearch(inputId, contentId) {
  const input = document.getElementById(inputId);
  const content = document.getElementById(contentId);
  const original = content.textContent;

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    if (!query) {
      content.textContent = original;
      return;
    }
    const lines = original.split('\n');
    const matched = lines.filter(line => line.toLowerCase().includes(query));
    content.textContent = matched.join('\n');
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    scrollBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("[data-search-input]");
  const searchContent = document.querySelector("[data-search-content]");
  if (searchInput && searchContent) {
    setupSearch(searchInput.id, searchContent.id);
  }
});
