export interface Product {
  id: number;
  title: string;
  categoryName: string;
  usageInfor: string;
  origin: string;
  price: number;
  originalPrice: number;
  image: string;
}

export interface ProductReponse {
  productId: number;
  feId: string;
  userName: string;
  categoryName: string;
  description: string;
  origin: string;
  type: string;
  status: string;
  price: number;
  title: string;
  images: any[];
  createdTime: Date;
}
