// Borde de la barra al bajar
const barra = document.querySelector('.barra');
const marcarBarra = () => barra.classList.toggle('con-borde', scrollY > 8);
addEventListener('scroll', marcarBarra, { passive: true });
marcarBarra();

// Aparición suave de las tarjetas
const observador = new IntersectionObserver((entradas) => {
  for (const e of entradas) if (e.isIntersecting) { e.target.classList.add('visto'); observador.unobserve(e.target); }
}, { rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.revelar').forEach((el) => observador.observe(el));

// Copiar el mail
const aviso = document.querySelector('.aviso');
let temporizador;
document.querySelectorAll('[data-copiar]').forEach((boton) => boton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(boton.dataset.copiar);
    aviso.textContent = 'Mail copiado';
  } catch {
    aviso.textContent = boton.dataset.copiar;
  }
  aviso.classList.add('visible');
  clearTimeout(temporizador);
  temporizador = setTimeout(() => aviso.classList.remove('visible'), 2200);
}));
