interface IDish {
  id: string;
  name: string;
  description: string;
  price: number;
  urlImage: string;
}

interface IDishMutation {
  name: string;
  description: string;
  price: number;
  urlImage: string;
}

export interface DishCart {
  dish: IDish;
  amount: number;
}

export interface ICustomer {
  name: string;
  address: string;
  phone: string;
}

export interface IOrderMutation {
  customer: ICustomer,
  dishes: DishCart[],
}

export interface IOrderAPI {
  [id: string]: IOrderMutation;
}

export type ApiDish = Omit<IDishMutation, 'id'>;

export interface DishesList {
  [id: string]: ApiDish;
}