const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.menu-card');
const addButtons = document.querySelectorAll('.add-btn');
const cartCount = document.querySelector('.cart-count');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

menuToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    cards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !matches);
    });
  });
});

let count = 0;
addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    if (cartCount) {
      cartCount.textContent = count;
    }
  });
});
