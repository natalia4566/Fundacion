'use client';

import { useState } from 'react';
import styles from './legal.module.css';

const Legal = () => {
  const [activo, setActivo] = useState(null);

  const documentosPorAno = {
  2020: [
    { nombre: 'Denominacion de  domicilio.', url: '/Documentos/2020/1.-Denominacion-domicilio.pdf' },
    { nombre: 'Descripcion actividad meritoria.', url: '/Documentos/2020/2.-Descripcion-Actividad-Meritoria.pdf' },
    { nombre: 'Certificado requisitos RL.', url: '/Documentos/2020/3.Certificado-Requisitos-RL.pdf' },
    { nombre: 'Certificación antecedentes judiciales RL.', url: '/Documentos/2020/4.-Certificacion-Antecedentes-Judic-RL.pdf' },
    { nombre: 'Nombre de los cargos cirectivos y de control.', url: '/Documentos/2020/5.-Nombre-de-los-Cargos-Directivos-y-de-Control.pdf' },
    { nombre: 'Identificación de fundadores.', url: '/Documentos/2020/6.Identificacion-Fundadores.pdf' },
    { nombre: 'Estados rinancieros 2020.', url: '/Documentos/2020/Estados-Financieros-2020.pdf' }
  ],
  2021: [
    { nombre: 'Denominacion de  domicilio.', url: '/Documentos/2021/1.Denominacion-Domicilio-e-Identificacion.pdf' },
    { nombre: 'Descripcion actividad meritoria.', url: '/Documentos/2021/2.-Descripcion-de-la-Actividad-Meritoria.pdf' },
    { nombre: 'Certificado requisitos RL.', url: '/Documentos/2021/3.-Certificado-Requisitos-RL.pdf' },
    { nombre: 'Certificación atecedentes judiciales RL.', url: '/Documentos/2021/4.-Certificado-de-Antecedentes-RL-.pdf' },
    { nombre: 'Nombre de los cargos directivos y de control.', url: '/Documentos/2021/5.-Cargos-Directivos-y-de-Control.pdf' },
    { nombre: 'Acta de asamblea.', url: '/Documentos/2021/6.-Acta-Asamblea-General.pdf' },
    { nombre: 'Identificación de fundadores.', url: '/Documentos/2021/8.-Identificacion-Fundadores.pdf' },
    { nombre: 'Pagos salariales.', url: '/Documentos/2021/9.-Monto-Pago-Salariales.pdf' },
    { nombre: 'Estados Financieros 2021.', url: '/Documentos/2021/10.-Estados-Financieros-2021.pdf' }
  ],
  2022: [
    { nombre: 'Denominacion de  domicilio.', url: '/Documentos/2022/1.-Denominacion-Identificacion.pdf' },
    { nombre: 'Descripcion actividad meritoria.', url: '/Documentos/2022/2.-Descripcion-Atividad-Meritoria.pdf' },
    { nombre: 'Certificado requisitos RL.', url: '/Documentos/2022/3.-Certificado-Requisitos-RL-1.pdf' },
    { nombre: 'Certificación atecedentes judiciales RL.', url: '/Documentos/2022/4.-Certificado-Antecentes.pdf' },
    { nombre: 'Nombre de los cargos directivos y de control.', url: '/Documentos/2022/5.-Cargos-Directivos-y-de-Control-1.pdf' },
    { nombre: 'Acta de asamblea.', url: '/Documentos/2022/6.-Acta-Asamblea-General-1.pdf' },
    { nombre: 'Identificación de fundadores.', url: '/Documentos/2022/8.-Identificacion-Fundadores-1.pdf' },
    { nombre: 'Estados Financieros 2022.', url: '/Documentos/2022/Estados-Financieros-2022.pdf' }
  ],
  2023: [
    { nombre: 'Denominacion de domicilio.', url: '/Documentos/2023/1.-Denominacion-Identificacion-Domicilio-pdf.pdf' },
    { nombre: 'Descripcion actividad meritoria.', url: '/Documentos/2023/2.-DescripcionActividad-Meitoria-pdf.pdf' },
    { nombre: 'Certificado requisitos RL.', url: '/Documentos/2023/3.-Certificado-Requisitos-RL-pdf.pdf' },
    { nombre: 'Certificación antecedentes judiciales RL.', url: '/Documentos/2023/4-Certificado-Antecedentes-RL.pdf' },
    { nombre: 'Nombre de los cargos directivos y de control.', url: '/Documentos/2023/5.-Cargos-Directivos-y-de-Control-pdf.pdf' },
    { nombre: 'Acta de asamblea.', url: '/Documentos/2023/6.-Acta-Asamblea-General-pdf.pdf' },
    { nombre: 'Informe anual de gestión.', url: '/Documentos/2023/7.-Informe-Anual-de-Gestion-pdf.pdf' },
    { nombre: 'Identificación de fundadores.', url: '/Documentos/2023/8.-Identificacion-Fundadores-pdf.pdf' },
    { nombre: 'Estado de resultados 2023.', url: '/Documentos/2023/Estado-de-Resultados-2023-pdf.pdf' },
    { nombre: 'Formato 5245.', url: '/Documentos/2023/FORMATO-5245.pdf' }
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
      <h3 className={styles.subtitulo}>Aquí nuestra normatividad clasificada por año</h3>
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
