"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { img: "contacto1.png", title: "SOLIDARIDAD", text: "Compañerismo y trabajo en equipo." },
  { img: "contacto2.png", title: "COMPROMISO", text: "Compromiso con la comunidad." },
  { img: "contacto4.png", title: "VOCACIÓN", text: "Pasión por el servicio y ayuda." },
  { img: "contacto5.png", title: "JUSTICIA", text: "Actuar con equidad y responsabilidad." },
  { img: "contacto3.png", title: "ESPÍRITU", text: "Liderazgo y determinación." },
];

const duplicatedItems = [...items, ...items, ...items, ...items, ...items];

export default function Carrusel() {
  const deslizadorRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame;
    let lastTimestamp = null;
    const velocidad = 30; // píxeles por segundo

    const animate = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp; // ms desde el último frame
      lastTimestamp = timestamp;

      const pixelsToMove = (velocidad * delta) / 1000; // convertir a píxeles reales por segundo

      setOffset((prev) => {
        const deslizador = deslizadorRef.current;
        if (deslizador) {
          const totalWidth = deslizador.scrollWidth;

          const nextOffset = prev + pixelsToMove;
          if (nextOffset >= totalWidth / 2) {
            return 0;
          }
          return nextOffset;
        }
        return prev;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="carrusel relative overflow-hidden w-full">
      <div className="contenedor-carrusel overflow-hidden relative w-full">
        <div
          ref={deslizadorRef}
          className="deslizador flex"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "transform 0s linear",
            width: "max-content",
          }}
        >
          {duplicatedItems.map((item, i) => (
            <div key={i} className="card min-w-[200px] mx-2">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
