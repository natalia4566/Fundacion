import { noticias } from './noticias';

export function getNoticiaBySlug(slug) {
  return noticias.find(n => n.slug === slug);
}

export function getAllNoticias() {
  return noticias;
}
