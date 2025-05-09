import React from 'react';
import styles from './testimonios.module.css';
import Comentarios from "../../components/comentarios";

const Testimonios = () => {
  const testimonios = [
    {
      nombre: "Mario Rodríguez",
      descripcion: "Hijo de residente",
      texto: "El tiempo que estuvo mi madre en el hogar , fue muy importante para ella y nosotros como familia, el estado de animo de ella cambió muchísimo , la compañía y el cariño con la que la trataban hicieron de ella otra persona",
      imagen: "testimonio1.png"
    },
    {
      nombre: "Juan Pérez",
      descripcion: "Residente",
      texto: "Aquí me siento en familia. Siempre hay algo que hacer, desde actividades recreativas hasta momentos de oración. El trato es excelente y me siento acompañado y cuidado todos los días.",
      imagen: "juan.png"
    },
    {
      nombre: "Luisa Fernández",
      descripcion: "Hija de residente",
      texto: "Mi abuela recibe el cariño y la atención que merece. Nos tranquiliza saber que está en un lugar donde se preocupan por su bienestar físico y emocional. Es un hogar de verdad, no solo un lugar de cuidado.",
      imagen: "luisa.png"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.introContent}>
          <div className={styles.encabe}>
            <h2 className={styles.titulo}>¡Tu opinión es importante para nosotros!</h2>
            <p className={styles.descripcion}>
              Las experiencias de quienes forman parte de nuestro hogar son el reflejo del cariño y compromiso con el que cuidamos a cada adulto mayor. Aquí compartimos testimonios y comentarios de familiares y residentes, quienes nos inspiran a seguir brindando bienestar, compañía y calidad de vida.
            </p>
          </div>

          <div className={styles.imagenWrapper}>
            <img className={styles.imagentesti} src="testi1.png" alt="viejita" />
          </div>
        </div>
      </div>


      <section className={styles.testimonios}>
        <h3 className={styles.subtitulo}>Testimonios</h3>
        <div className={styles.cardsContainer}>
          {testimonios.map((t, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.texto}>"{t.texto}"</p>
              <div className={styles.perfil}>
                
                <p className={styles.nombre}>{t.nombre}</p>
                <p className={styles.descripcionPerfil}>{t.descripcion}</p>
                <img src={t.imagen} alt={t.nombre} className={styles.imagen} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Comentarios />

    </div>
  );
};

export default Testimonios;
