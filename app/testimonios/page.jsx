import React from 'react';
import styles from './testimonios.module.css';
import Comentarios from "../../components/comentarios";

const Testimonios = () => {
  const testimonios = [
    {
      nombre: "Abigail Marina Gamez",
      descripcion: "Hija de residente",
      texto: "Como acudiente responsable de mi mamá Graciela Perdomo de Gamez (Chelita) quien reside en el hogar Tu Amparo y Tu Fortaleza desde los primeros días de su fundación, quiero manifestar mi agradecimiento de manera muy especial a sus directivos y a todo el personal de apoyo por el trato digno y el manejo profesional que han tenido para con ella durante los años que ha estado con ustedes pues siendo una paciente de 103 años ha sobrevivido muy bien gracias a sus cuidados a su paciencia y sobretodo al amor que le profesan, Dios los siga bendiciendo por siempre.",
      imagen: "abigail.png"
    },
    {
      nombre: "Gerardo Antonio Ospina",
      descripcion: "Hijo de residente",
      texto: "El tiempo que estuvo mi madre en el hogar , fue muy importante para ella y nosotros como familia, el estado de animo de ella cambió muchísimo , la compañía y el cariño con la que la trataban hicieron de ella otra persona",
      imagen: "testimonio1.png"
    },
    
    {
      nombre: "Tomas Polo",
      descripcion: "Hijo de residente",
      texto: "Deseo expresarles mi más profundo agradecimiento por la hermosa labor que realizan día a día. Su amabilidad, gentileza, respeto y amor por lo que hacen se reflejan en cada gesto, en cada palabra y en cada cuidado que le brindan a mi madre. Gracias por su entrega, por cuidar de ella con tanto esmero, por su dedicación en su alimentación, en su bienestar y en cada detalle que contribuye a su salud y felicidad. Sus cuidados han sido fundamentales para que mi madre siga adelante, y eso no tiene precio. Gracias por ser luz en momentos de incertidumbre. Por ser más que profesionales, por ser humanos de gran corazón. Que Dios les bendiga siempre.",
      imagen: "tomas.png"
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
