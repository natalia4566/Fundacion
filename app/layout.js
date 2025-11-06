"use client";
import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [pageKey, setPageKey] = useState(pathname);

  useEffect(() => {
    setPageKey(pathname);
  }, [pathname]);

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/Logo1.jpg" type="image/jpeg" />
      </head>
      <body>
        <Header />
        {/* tu botón flotante */}
        <div>
          <a
            href="https://checkout.wompi.co/l/test_o33xsZ"
            target="_blank"
            rel="noopener noreferrer"
            className="boton-flotante"
          >
            <img src="donar.png" alt="Donar" />
          </a>
          <div className="texto-donar">DONA AQUÍ</div>
        </div>

        {/* main se remonta cada vez que cambia pathname -> aplica .page-transition */}
        <main key={pageKey} className="page-transition">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
