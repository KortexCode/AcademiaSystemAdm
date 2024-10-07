
import { Link } from "react-router-dom";

function Footer() {

 

    return (
        <footer className="bg-stone-950">
            <div className="flex flex-col sm:flex-row sm:justify-around pt-6 items-center text-center">
                <div className="mb-4">
                  <h3 className="titleTextFooter">Síguenos</h3>
                  <ul className="basicTextFooter">
                    <li className="mb-1"><a href="#">Facebook</a></li>
                    <li className="mb-1"><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                  </ul>
                </div>

                <div className="mb-4">
                    <h3 className="titleTextFooter">Contacto</h3>
                    <ul className="basicTextFooter">
                      <li className="mb-1">Dirección: Calle 123, Ciudad</li>
                      <li className="mb-1">Teléfono: +123 456 789</li>
                      <li>Email: info@academiabaile.com</li>
                    </ul>
                </div>

                <div className="mb-4">
                  <h3 className="titleTextFooter">Enlaces Útiles</h3>
                  <ul className="basicTextFooter">
                    <li className="mb-1"><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                    <li className="mb-1"><a href="#work-with-us">Trabaja con Nosotros</a></li>
                    <li><a href="#services">Servicios</a></li>
                  </ul>
                </div>
            </div>

            <div className="py-2 border shadow-shadowTop shadow-secondary-color text-center bg-secondary-color">
              <p className="font-semibold">&copy; 2024 Academia de Baile. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export {Footer};