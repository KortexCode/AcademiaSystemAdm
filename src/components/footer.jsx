
function Footer() {

    return (
        <footer className="footer">
            <div class="footer-container">
                <div class="footer-info">
                    <h3>Contacto</h3>
                    <ul>
                      <li>Dirección: Calle 123, Ciudad</li>
                      <li>Teléfono: +123 456 789</li>
                      <li>Email: info@academiabaile.com</li>
                    </ul>
                </div>

                <div class="footer-links">
                  <h3>Enlaces Útiles</h3>
                  <ul>
                    <li><a href="#about-us">Sobre Nosotros</a></li>
                    <li><a href="#work-with-us">Trabaja con Nosotros</a></li>
                    <li><a href="#services">Servicios</a></li>
                  </ul>
                </div>

                <div class="footer-social">
                  <h3>Síguenos</h3>
                  <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                  </ul>
                </div>
                </div>

            <div class="footer-bottom">
              <p>&copy; 2024 Academia de Baile. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export {Footer};