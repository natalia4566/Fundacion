"use client";

import { useEffect, useState } from 'react';
import styles from './comentarios.module.css';

const Comentarios = () => {
    const [comentarios, setComentarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [comentario, setComentario] = useState('');

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comentarios`)
            .then(res => res.json())
            .then(data => setComentarios(data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoComentario = { nombre, comentario };

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comentarios`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoComentario),
        });

        const data = await res.json();
        setComentarios([data, ...comentarios]);
        setNombre('');
        setComentario('');
    };

    return (
        <section className={styles.comentariosSection}>
            <section className={styles.fondoParallax}>
                <h2 className={styles.textoParallax}></h2>
            </section>

            <h2 className={styles.titulo}>Dejanos tu comentario</h2>

            <div className={styles.listaComentarios}>
                {comentarios.map((c, idx) => (
                    <div key={idx} className={styles.comentario}>
                        <span className={styles.nombre}>{c.nombre}</span>
                        <p className={styles.texto}>{c.comentario}</p>
                        <span className={styles.fecha}>{new Date(c.fecha).toLocaleString()}</span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <textarea
                    className={styles.textarea}
                    placeholder="Escribe tu comentario"
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    required
                ></textarea>
                <button className={styles.boton} type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default Comentarios;
