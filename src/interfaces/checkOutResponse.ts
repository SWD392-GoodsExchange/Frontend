import { ProductResponse } from "./productResponse";

// Define the OrderDetail interface
export interface OrderDetails {
  productId: number;
  product: ProductResponse;
  sellerId: string;
  amount: number;
}

export interface OrderDetail {
  productId: number;
  sellerId: string;
  amount: number;
}

export interface CheckoutResponse {
  productId: number;
  orderDetails: OrderDetail[];
}

export interface Orders {
  orderId: number;
  createdTime: string;
  totalAmount: number;
  totalOrderDetails: number;
  type: string;
  status: string;
  orderDetails: OrderDetails[];
}

export interface OrdersHistory {
  orderId: number;
  createdTime: string;
  totalAmount: number;
  totalOrderDetails: number;
  type: string;
  status: string;
  orderDetails: OrderDetails;
}

export interface Order {
  orderId: number;
  createdTime: string;
  totalAmount: number;
  totalOrderDetails: number;
  type: string;
  status: string;
  orderDetails: OrderDetail;
}
