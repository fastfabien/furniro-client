export interface Products {
  id: string;
  name: string;
  short_description: string;
  price: string;
}

export interface ProductState {
  image: string;
  name: string;
  short_description: string;
  price: number;
  alt: string;
  href: string;
}
