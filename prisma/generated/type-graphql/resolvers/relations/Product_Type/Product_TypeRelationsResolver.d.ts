import { Product } from "../../../models/Product";
import { Product_Type } from "../../../models/Product_Type";
import { Product_TypeProductArgs } from "./args/Product_TypeProductArgs";
export declare class Product_TypeRelationsResolver {
    product(product_Type: Product_Type, ctx: any, args: Product_TypeProductArgs): Promise<Product[]>;
}
