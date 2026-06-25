'use client';
import Link from 'next/link';
import { getAllNoticias } from '../lib/getNoticias';
import styles from './blog.module.css';

const meses = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
};

function parseFecha(fecha) {
  const [dia, , mes, , anio] = fecha.toLowerCase().split(' ');
  return new Date(Number(anio), meses[mes], Number(dia));
}

export default function BlogPage() {
  const noticias = getAllNoticias().sort(
    (a, b) => parseFecha(b.fecha) - parseFecha(a.fecha)
  );

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