'use client';

import styles from './contacto.module.css';
import { useState, useEffect } from 'react';

const images = [
  '/contacto1.png',
  '/contacto2.png',
  '/contacto3.png',
  '/contacto4.png',
  '/contacto5.png'
];

export default function contacto() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacto`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Mensaje enviado correctamente');
      setForm({ nombre: '', email: '', mensaje: '' });
    } else {
      alert('Hubo un error');
    }
  };

  return (
    <div className={styles.container}>

      <div className={styles.contenidoContacto}>

        {/* Carrusel de imágenes */}
        <div className={styles.imageContainer}>
          <img src={images[currentIndex]} alt="Carrusel" className={styles.image} />
        </div>

        {/* Formulario */}
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <h2>Contáctanos fácilmente</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            required
          />
          <button type="submit">ENVIAR</button>
        </form>

      </div>

      {/* Mapa abajo del formulario */}
      <div className={styles.mapaContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.793181373781!2d-76.5453879241869!3d3.400574351553894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a153f44611fd%3A0xaf2f30244dd152e!2sCra.%2064a%20%23%209-159%2C%20Gran%20Limonar%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1sen!2sco!4v1744814462038!5m2!1sen!2sco"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
}
