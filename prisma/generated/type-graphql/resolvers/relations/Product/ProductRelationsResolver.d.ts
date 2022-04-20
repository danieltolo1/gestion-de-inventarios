import { PartComputer } from "../../../models/PartComputer";
import { Product } from "../../../models/Product";
import { Product_Type } from "../../../models/Product_Type";
import { State } from "../../../models/State";
export declare class ProductRelationsResolver {
    product_type(product: Product, ctx: any): Promise<Product_Type>;
    state(product: Product, ctx: any): Promise<State>;
    partcomputer(product: Product, ctx: any): Promise<PartComputer | null>;
}
