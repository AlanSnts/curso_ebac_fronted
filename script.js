// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Destaque do link ativo conforme a seção visível
(function enableActiveNavOnScroll() {
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const linkById = new Map(
    navLinks.map(link => [link.getAttribute('href').replace('#', ''), link])
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = linkById.get(id);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, {
    root: null,
    rootMargin: '-40% 0px -55% 0px', // favorece a seção centralizada na viewport
    threshold: [0.01, 0.25, 0.6]
  });

  sections.forEach(sec => observer.observe(sec));
})();

