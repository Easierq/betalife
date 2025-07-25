export interface Blog {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Testimonial {
  id: string;
  name: string;
  testimonial: string;
  profession: string;
  createdAt: string;
  updatedAt: string;
}
