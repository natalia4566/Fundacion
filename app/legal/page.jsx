'use client';

import { useState } from 'react';
import styles from './legal.module.css';

const Legal = () => {
  const [activo, setActivo] = useState(null);

  const documentosPorAno = {
  2025: [
  { nombre: 'Denominacion Identificacion Domicilio', url: '/Documentos/2025/1. Denominacion Identificacion Domicilio.pdf' },
  { nombre: 'Descripcion Actividad Meritoria', url: '/Documentos/2025/2. Descripcion Actividad Meritoria (1).pdf' },
  { nombre: 'Certificado Requisitos R.L.', url: '/Documentos/2025/3. Certificado Requiisitos R.L..pdf' },
  { nombre: 'Certificacion Antecedentes R.L.', url: '/Documentos/2025/4. Certificacion Antecedentes R.L..pdf' },
  { nombre: 'Cargos Directivos y de Control', url: '/Documentos/2025/5. Cargos Directivos y de Control (1).pdf' },
  { nombre: 'Acta Asamblea 2026 EF 2025', url: '/Documentos/2025/6. Acta Asamblea 2026 EF 2025.pdf' },
  { nombre: 'Informe Anual Gestion 2025', url: '/Documentos/2025/7. Informe Anual Gestion 2025.pdf' },
  { nombre: 'Identificacion Fundadores', url: '/Documentos/2025/8. Identifacion Fundadores.pdf' },
  { nombre: 'Monto Total Donaciones 2025', url: '/Documentos/2025/9. Monto Total Donaciones 2025.pdf' },
  { nombre: 'Monto Pagos Salariales a Directivos', url: '/Documentos/2025/10. Monto Pagos Salariales a Directivos.pdf' },
  { nombre: 'Estado de Resultados 2025', url: '/Documentos/2025/ESTADO DE RESULTADOS 2025.pdf' },
  { nombre: 'Formato 5245 RTE', url: '/Documentos/2025/FORMATO 5245 RTE.pdf' }
]


};


  const toggleAno = (ano) => {
    setActivo((prev) => (prev === ano ? null : ano));
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.encabezado}>
        <img src="baner.png" alt="Banner" className={styles.banner} />
        <div className={styles.textoBanner}>
          <h2>Información y documentos legales de la fundación</h2>
          <p>La Fundación Tu Amparo y Tu Fortaleza ofrece aquí la siguiente información en cumplimiento del artículo 364-5 del Estatuto Tributario.</p>
        </div>
      </div>
      <h3 className={styles.subtitulo}>En esta sección se encuentra disponible la información actualizada del registro web de la Fundación Tu Amparo y Tu Fortaleza</h3>
      {Object.entries(documentosPorAno).map(([ano, docs]) => (
        <div key={ano} className={styles.bloque}>
          <button className={styles.boton} onClick={() => toggleAno(ano)}>
            {ano}
          </button>
          <div className={`${styles.contenido} ${activo === ano ? styles.activo : ''}`}>
            <ol className={styles.lista}>
              {docs.map((doc, i) => (
                <li key={i}>
                  <a
                    className={styles.enlace}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {doc.nombre}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Legal;
