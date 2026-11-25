document.querySelectorAll('.pagination-jump').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.elements.page;
    if (!input.reportValidity()) return;
    const page = Number(input.value);
    const base = form.dataset.base;
    window.location.href = page === 1 ? base : `${base}page/${page}/`;
  });
});
