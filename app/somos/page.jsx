'use client';
import styles from './somos.module.css';

export default function SomosPage() {
  return (
    <main className={styles.somosMain}>
      <h1 className={styles['titulo-somos']}>¿Quiénes somos?</h1>

      <section className={styles['seccion-azul']}>
        <p className={styles['descripcion-somos']}>
          Somos un hogar geriátrico basado en mejorar la calidad de vida del Adulto Mayor, con una amplia experiencia de más de 15 años en el cuidado del adulto mayor. Totalmente dedicados a la labor y atención integral de nuestros residentes, contamos con un personal que ama su labor y la realiza con profesionalismo, vocación de servicio, respeto, responsabilidad, eficiencia y tolerancia, para que nuestros adultos mayores se sientan felices y protegidos en esta etapa de su vida.
        </p>
      </section>
      <div className={styles['bloque']}>
        <section className={styles['bloque-mision']}>
          <div className={styles['imagen']}>
            <img src="mision.png" alt="Misión" className={styles['imagen-mision']} />
          </div>
          <div className={styles['texto-mision']}>
            <h2>MISIÓN</h2>
            <p>
              La Fundación Hogar Geriátrico Tu Amparo y Tu Fortaleza tiene como misión atender con vocación de servicio y profesionalismo al Adulto Mayor en sus diferentes etapas del envejecimiento. Fundamenta su intervención en el respeto y el afecto, prestando un servicio de calidad humana, eficiente y eficaz mediante la valoración de la persona y su dignidad. Brindando en nuestro hogar la protección, el cuidado y consuelo, generando espacios importantes de reflexión, de encuentro consigo mismo, con su familia, el entorno y con Dios. Nuestro hogar proporciona valorar la hermosa misión del Adulto Mayor, los cuales para nosotros son inspiradores de sabiduría, dadores de testimonio, fe y amor.
            </p>
            <p>
              Nuestro hogar define ser amparados por el amor de Dios, otorgados en el don de nuestros cuidadores, y fortalecerlos a conllevar su etapa del envejecimiento con dignidad, brindando bienestar al Adulto Mayor a través de la prestación de servicios de carácter asistencial y recreacional, ofreciendo una infraestructura física con un gran talento humano, garantizando la protección y autonomía de los deberes y derechos, cimentados en el respeto por la individualidad, en un ambiente de afecto, enfocados en lograr tener a nuestros Adultos Mayores gozando de un trato de fraternidad, armonía y fortaleza, sin distingo de raza, creencias espirituales ni condición social.
            </p>
          </div>
        </section>

        <section className={styles['bloque-vision']}>
          <div className={styles['imagen']}>
            <img src="vision.png" alt="Visión" className={styles['imagen-vision']} />
          </div>
          <div className={styles['texto-vision']}>
            <h2>VISIÓN</h2>
            <p>
              Nuestra Fundación Hogar Geriátrico Tu Amparo y Tu Fortaleza trabaja continuamente para ser el mejor hogar geriátrico. Hemos moldeado esta visión a través de nuestro espíritu de servicio, enfocados en la vocación de servicio para nuestros Adultos Mayores. Afianzamos día a día la mejora de la calidad de vida de los adultos mayores, sin importar el nivel de necesidad y dependencia que presenten. Nos hemos formado como una entidad seria y profesional para poder ofrecer a todos nuestros adultos mayores la mejor calidad de servicio, logrando así mejorar el estilo de vida de todos. Contamos con un espacio adecuado para personas de la tercera edad, donde el ambiente familiar y profesional se mezclan para dar como resultado un lugar que podrá ser un verdadero hogar para los Adultos Mayores, y de satisfacción y tranquilidad para sus seres queridos y familiares.
            </p>
          </div>
        </section>

      </div>

    </main>
  );

}

