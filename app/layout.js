import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
export const metadata = {
  title: 'Tu Amparo y Tu Fortaleza',
  description: 'Cuidado integral para adultos mayores',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo1.jpg" type="image/jpeg" />
      </head>
      <body>
        <Header />
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
        
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}

