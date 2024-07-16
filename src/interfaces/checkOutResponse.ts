// Define the OrderDetail interface
export interface OrderDetail {
  productId: number;
  sellerId: string;
  amount: number;
}

export interface CheckoutResponse {
  memberId: string;
  orderDetails: OrderDetail[];
}
