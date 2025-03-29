export interface Tour {
  id: string;
  title: string;
  location: string;
  date: string;
  duration: string;
  price: string;
  format: string;
  description: string;
  program: string[];
  images: string[];
  featured?: boolean;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
} 