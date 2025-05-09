import Carrusel from "../components/carrusel";

export default function Home() {
  return (
    <div>
      

      {/* Sección principal */}
      <section className="seccion-azul">
        <div className="contenido-principal">
          <h1 className="titulo-principal">Más de 15 años brindando amor y
            calidad de vida a quienes más lo merecen</h1>
          <p className="texto-descriptivo">Somos un hogar geriátrico dedicado al cuidado y bienestar del adulto mayor.
            Ofrecemos atención integral con un equipo comprometido, profesional y lleno de vocación. Nuestro propósito es brindar un ambiente seguro, cálido y lleno de amor, donde cada residentese sienta acompañado, respetado y feliz en esta etapa de su vida</p>
        </div>
        <div className="referencia">
          <img src="referencia.png" alt="Señores sonrientes" />
        </div>
      </section>

      {/* Carrusel */}
      <Carrusel />

      {/* Actividades */}
      <section className="actividades">
        <div className="contenido-actividades">
          <h2 className="titulo-actividades">Durante su estancia, podrán disfrutar de ...</h2>
        </div>
        <div className="grid-actividades">
          <div className="item">
            <div className="item-imagen">
              <img src="cognitiva.jpg" alt="Actividad cognitiva" />
            </div>
            <div className="item-contenido">
              <h3>ACTIVIDADES COGNITIVAS</h3>
              <p>
                Se estimulan funciones mentales como memoria, atención y comprensión mediante actividades terapéuticas que refuerzan la motricidad, la percepción y la integración social. Juegos de mesa y tradicionales fomentan la autoestima, la competencia sana y el respeto por las normas.
              </p>
            </div>
          </div>

          <div className="item invertido">
            <div className="item-imagen curva-invertida">
              <img src="espiritualidad.png" alt="Motivación espiritual" />
            </div>
            <div className="item-contenido">
              <h3>MOTIVACIÓN Y ASISTENCIA ESPIRITUAL</h3>
              <p>
                Nuestro hogar respeta y fortalece la espiritualidad de cada adulto mayor, animándolos a sentir el amor de Dios y su familia. Fomentamos la integración espiritual, promoviendo el bienestar psicológico, el crecimiento personal y un sentido de propósito en esta etapa de la vida.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="item-imagen">
              <img src="ordenes.png" alt="Órdenes médicas" />
            </div>
            <div className="item-contenido">
              <h3>ACOMPAÑAMIENTO Y TRÁMITE DE ÓRDEN MÉDICAS</h3>
              <p>
                Brindamos acompañamiento a citas médicas, donde la enfermera jefe interactúa con el médico para informar sobre la evolución del adulto mayor y su tratamiento. Además, gestionamos autorizaciones médicas, medicamentos e insumos, evitando que los adultos mayores se queden sin los trámites necesarios y facilitando la vida de sus familiares.
              </p>
            </div>
          </div>

          <div className="item invertido">
            <div className="item-imagen curva-invertida">
              <img src="fechas.png" alt="Fechas especiales" />
            </div>
            <div className="item-contenido">
              <h3>CELEBRACIÓN DE FECHAS ESPECIALES</h3>
              <p>
                En nuestro hogar celebramos fechas especiales para brindar alegría y fortalecer la integración. Organizamos cumpleaños, el Día de la Madre y del Padre con actividades emotivas, y Amor y Amistad con juegos y expresiones artísticas. En el Día de la Mujer, decoramos el hogar y los caballeros dedican poemas. En Navidad, los residentes realizan manualidades, reciben a los novenos, comparten cenas especiales y disfrutan del alumbrado navideño, reviviendo momentos de felicidad.
              </p>
            </div>
          </div>
        </div>

       


      </section>
    </div>
  );
}
