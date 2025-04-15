// Clase para manejar la navegación y efectos UI
class NavManager {
  constructor() {
    this.init();
  }

  // Método de inicialización
  init() {
    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');

    // Agregar evento de scroll suave a cada enlace
    navLinks.forEach(link => {
      link.addEventListener('click', this.handleNavClick.bind(this));
    });

    // Detectar scroll para efectos visuales
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  // Manejador de clics en la navegación
  handleNavClick(event) {
    const targetId = event.currentTarget.getAttribute('href');

    // Si es un enlace interno con #
    if (targetId.startsWith('#') && targetId.length > 1) {
      event.preventDefault();
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  }

  // Manejador de eventos de scroll
  handleScroll() {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
      header.style.padding = '10px 0';
    } else {
      header.style.padding = '20px 0';
    }
  }
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Instanciar el gestor de navegación
  const navManager = new NavManager();

  // Mostrar mensaje en consola para depuración
  console.log('Proyecto Git iniciado correctamente');
});
