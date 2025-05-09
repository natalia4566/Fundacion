'use client';
import Link from 'next/link';
import { getAllNoticias } from '../lib/getNoticias';
import styles from './blog.module.css';

export default function BlogPage() {
  const noticias = getAllNoticias();

  return (
    <div className={styles.grande}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Blog de la fundación</h1>
        <ul className={styles.list}>
          {noticias.map(noticia => (
            <li key={noticia.slug} className={styles.listItem}>
              <div>
                <div className={styles.title}>{noticia.titulo}</div>
                <div className={styles.date}>{noticia.fecha}</div>
              </div>
              <Link href={`/blog/${noticia.slug}`}>
                <div className={styles.enlace}>Leer más</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
