'use client';

import { noticias } from '../../lib/noticias';
import Image from 'next/image';
import styles from './page.module.css';
import { use } from 'react';

export default function NoticiaPage({ params }) {
  const { slug } = use(params);

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
              return item.valor.split('\n').map((linea, j) => (
                <p key={`${i}-${j}`}>{linea}</p>
              ));
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

            return null;
          })}

          {/* Video principal */}
          {noticia.videoUrl && (
            <VideoPlayer src={noticia.videoUrl} titulo={noticia.titulo} />
          )}

          {/* Videos adicionales */}
          {noticia.videosAdicionales?.length > 0 && (
            <div className={styles.videosAdicionales}>
              {noticia.videosAdicionales.map((video, i) => (
                <div key={i} className={styles.videoExtra}>
                  {video.titulo && (
                    <h3 className={styles.videoTitulo}>{video.titulo}</h3>
                  )}
                  <VideoPlayer src={video.url} titulo={video.titulo} />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// Componente auxiliar para no repetir lógica
function VideoPlayer({ src, titulo }) {
  const esYoutube = src.includes('youtube');

  return (
    <div className={styles.videoWrapper}>
      {esYoutube ? (
        <iframe
          width="100%"
          height="400"
          src={src}
          title={titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video controls width="100%">
          <source src={src} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      )}
    </div>
  );
}