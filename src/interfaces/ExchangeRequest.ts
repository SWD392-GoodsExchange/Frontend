export interface ExchangeRequest {
  notificationId: number;
  senderId: string;
  senderUsername: string;
  recipientId: string;
  recipientUsername: string;
  onwerProduct: ErProduct;
  exchangerProducts: ErProduct[];
  content: string;
  dateRead: Date | null;
  createdDate: Date;
}

export interface ErProduct {
  productId: number;
  feId: string;
  userName: null;
  avatar: string;
  categoryName: string;
  description: string;
  origin: string;
  type: string;
  status: string;
  price: number;
  title: string;
  images: Image[];
  createdTime: Date;
}

export interface Image {
  imageUrl: string;
  publicId: string;
}

export interface AcceptExchangeRequest {
  ownerID: string;
  notificationID: number;
}
