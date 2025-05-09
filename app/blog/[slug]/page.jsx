'use client';

import { noticias } from '../../lib/noticias';
import Image from 'next/image';
import styles from './page.module.css';
import { use } from 'react';

export default function NoticiaPage({ params }) {
  const { slug } = use(params); // Desenvuelves la promesa de params

  const noticia = noticias.find(n => n.slug === slug);

  if (!noticia) return <div className={styles.notFound}>Noticia no encontrada</div>;

  return (
    <div className={styles.grande}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={noticia.imagen}
            alt={noticia.titulo}
            fill
            className={styles.image}
          />
        </div>

        <h1 className={styles.title}>{noticia.titulo}</h1>
        <p className={styles.date}>{noticia.fecha}</p>

        <div className={styles.content}>
          {noticia.contenido.map((item, i) => {
            if (item.tipo === 'texto') {
              return (
                item.valor.split('\n').map((linea, j) => (
                  <p key={`${i}-${j}`}>{linea}</p>
                ))
              );
            }

            if (item.tipo === 'imagen') {
              return (
                <div key={i} className={styles.inlineImage}>
                  <Image
                    src={item.valor}
                    alt={item.alt || 'Imagen'}
                    width={500}
                    height={400}
                    className={styles.contentImage}
                  />
                </div>
              );
            }

            // Aquí podrías añadir lógica futura para más tipos
            return null;
          })}

          {noticia.videoUrl && (
            <div className={styles.videoWrapper}>
              <video controls width="100%">
                <source src={noticia.videoUrl} type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
