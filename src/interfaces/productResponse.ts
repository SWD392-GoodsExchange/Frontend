export interface Product {
  id: number;
  title: string;
  categoryName: string;
  usageInfor: string;
  origin: string;
  price: number;
  image: string;
}

export interface ProductResponse {
  productId: number;
  feId: string;
  userName: string;
  avatar: string;
  categoryName: string;
  description: string;
  origin: string;
  type: string;
  status: string;
  price: number;
  title: string;
  images: Images[];
  createdTime: Date;
}

export interface Images {
  imageUrl: string;
  publicId: string;
}
