import styles from "./servicio.module.css";

export default function Servicios() {
  return (
    <main className={styles.serviciosMain}>
      <h1 className={styles.tituloServicios}>Nuestros servicios</h1>

      <section className={styles.encabezadoServicios}>
          <img src="servicios.png" alt="Adultos mayores" className={styles.imgServicio} />
        <div className={styles.textoEncabezado}> 
          <p>
        
            Cada adulto mayor merece cuidado, compañía y alegría. Por eso, en nuestro hogar ofrecemos servicios
            pensados para su bienestar, desde acompañamiento médico hasta actividades recreativas que fomentan la
            integración y felicidad, brindando tranquilidad a sus familias.
          </p>
        </div>
      </section>

      <div className={styles.Servicios}>
         <section className={styles.gridServicios}>
        <div className={styles.tarjetaServicio}>
        <img src="estancia.png" alt="icono" className={styles.iconotarjeta} />
          <h3>Estancia permanente</h3>
          <p>Dirigida a Adultos Mayores que por su condición de salud, familiar o social requieren de atención y acompañamiento por periodos de estadía prolongados, donde incluye el servicio de auxiliares de enfermería las 24 horas del día entrenadas y capacitadas por la enfermera jefe del hogar para el manejo de las diferentes patologías que presenten.</p>
        </div>
        <div className={styles.tarjetaServicio}>
        <img src="lavadora.png" alt="icono" className={styles.iconotarjeta} />
          <h3>Lavado de ropa</h3>
          <p>Proceso realizado en el cuarto de lavadero, con la selección en cestas de prendas a la cual corresponda, utilizando productos suaves para la ropa y adecuados para la piel del adulto mayor.</p>
        </div>
        <div className={styles.tarjetaServicio}>
        <img src="transporte.png" alt="icono" className={styles.iconotarjeta} />
          <h3>Servicio de transporte</h3>
          <p>Dirigida a Adultos Mayores que requiera el cuidado, bienestar y tranquilidad del hogar durante el día retornando a su entorno familiar al finalizar la tarde, se maneja días, semanas, fines de semana y vacaciones, Con servicio de transporte para aquellos adultos que no puedan ser transportados por sus familiares, (se maneja zona sur).</p>
        </div>
        <div className={styles.tarjetaServicio}>
        <img src="medica.png" alt="icono" className={styles.iconotarjeta} />
          <h3>Atención médica 24 horas</h3>
          <p>Personal auxiliar de enfermería seleccionado por la Enfermera Jefe donde se realiza una entrevista acordada revisión de documentos: Resolución por Secretaria de Salud, antecedentes judiciales, carne de vacunación, referencias laborales, personales y familiares. Examen de Ingreso básico acerca de sus funciones como auxiliar de enfermería, donde destacamos la principal esencia la vocación de servicio y conocimientos en el área.</p>
        </div>
        <div className={styles.tarjetaServicio}>
        <img src="alimentacion.png" alt="icono" className={styles.iconotarjeta} />
          <h3>Alimentación balanceada</h3>
          <p>Adaptamos la alimentación según las necesidades médicas de cada adulto mayor, garantizando una dieta saludable y segura. Nuestro personal cumple estrictas normas de manipulación de alimentos para evitar enfermedades y recibe capacitación anual por la Secretaría de Salud. Además, utilizamos productos de calidad adquiridos en almacenes de cadena y elaboramos el menú semanal con la participación de nuestras abuelas del hogar.</p>
        </div>
        <div className={styles.tarjetaServicio}>
        <img src="fisica.png" alt="icono" className={styles.iconotarjeta} />
          <h3>Terapia física</h3>
          <p>La terapia física es realizada por un fisioterapeuta, quien evalúa a cada adulto mayor considerando su historial médico, limitaciones y nivel funcional para diseñar un plan de ejercicios adecuado. Esta terapia incluye actividades de equilibrio, fortalecimiento, resistencia y flexibilidad, buscando mejorar la movilidad y reducir el sedentarismo. Cuando el fisioterapeuta no está presente, la enfermera jefe y el auxiliar siguen un plan de trabajo para dar continuidad a la actividad física, garantizando así el bienestar y la calidad de vida de nuestros residentes.</p>
        </div>
        <div className={styles.tarjetaServicio}>
        <img src="respiratoria.png" alt="icono" className={styles.iconotarjeta} />
          <h3>Terapia respiratoria</h3>
          <p>Indicada para aquellos adultos mayores que como principal patología padecen de afecciones cardio-pulmonares o respiratorios agudos o crónicos respiratorios, donde de la mano con el Terapeuta Respiratorio quien se encuentra dos veces por semana inicia un plan de trabajo acorde a su necesidad. Fortaleciendo estímulos respiratorios. (Incluye manejo de adultos mayores con traqueostomía) personal entrenado para su correcto manejo.</p>
        </div>
        <div className={styles.tarjetaServicio}>
        <img src="ocupacional.png" alt="icono" className={styles.iconotarjeta} />
          <h3>Terapia ocupacional</h3>
          <p>Dirigida a todos aquellos adultos mayores que debido a algún accidente o patología que haya limitado su autonomía a cualquier nivel de la actividad de la vida diaria (AVD) el principal fin que se busca es el auto mantenimiento y la participación familiar y social, Realizada por un Profesional en el área 2 veces a la semana, instaurando plan de trabajo para ser desarrollados diariamente.</p>
        </div>
      </section>
      </div>

     
    </main>
  );
}
