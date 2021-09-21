import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../services/api";

interface Order{
  id: number;
  name: string;
  available: boolean;
  description: string;
  image: string;
  price:string
}

type OrderInput = Omit<Order,'id'| 'available'>

interface OrdersContext {
  orders: Order[]
  createOrder: (order: OrderInput) => Promise<void>
}

interface OrderProviderProps {
  children: ReactNode
}

const OrderContext = createContext<OrdersContext>({} as OrdersContext)

export const OrderProvider = ({children}: OrderProviderProps) => {
  const [orders, setOrders] = useState<Order[]>([])

  async function createOrder(ordersInput: OrderInput){
    const response = await api.post('foods', {...ordersInput, available: true})
    setOrders([...orders, response.data])
  }
  useEffect(() => {
    api.get('/foods').then(response => setOrders(response.data))

  },[orders])


  return(
    <OrderContext.Provider value={{orders,createOrder}} >{children}</OrderContext.Provider>
  )
}

export const useOrders = () => {
  const context = useContext(OrderContext)

  return context
}

