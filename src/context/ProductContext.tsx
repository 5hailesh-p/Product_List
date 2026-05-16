import { createContext } from "react"; 
import type { Product } from "../types/Product";
 
export const ProductContext = createContext<Product[]>([])