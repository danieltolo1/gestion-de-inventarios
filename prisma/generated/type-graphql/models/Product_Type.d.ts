import { Product } from "../models/Product";
import { Product_TypeCount } from "../resolvers/outputs/Product_TypeCount";
export declare class Product_Type {
    id_product_type: number;
    product?: Product[];
    description: string;
    _count?: Product_TypeCount | null;
}
