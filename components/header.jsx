'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="encabezado">
      <nav className="navbar">
        <img src="/logo.png" alt="Logo Fundación" className="logo" />
        <ul className="menu">
          <li className={pathname === '/' ? 'active' : ''}>
            <Link href="/">Inicio</Link>
          </li>
          <li className={pathname === '/somos' ? 'active' : ''}>
            <Link href="/somos">Quienes somos</Link>
          </li>
          <li className={pathname === '/servicios' ? 'active' : ''}>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li className={pathname === '/testimonios' ? 'active' : ''}>
            <Link href="/testimonios">Testimonios y comentarios</Link>
          </li>
          <li className={pathname === '/blog' ? 'active' : ''}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={pathname === '/legal' ? 'active' : ''}>
            <Link href="/legal">Información legal</Link>
          </li>
          <li className={pathname === '/contacto' ? 'active' : ''}>
            <Link href="/contacto">Contáctanos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
