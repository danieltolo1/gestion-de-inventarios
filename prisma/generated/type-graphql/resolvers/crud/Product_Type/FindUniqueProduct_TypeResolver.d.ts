import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProduct_TypeArgs } from "./args/FindUniqueProduct_TypeArgs";
import { Product_Type } from "../../../models/Product_Type";
export declare class FindUniqueProduct_TypeResolver {
    product_Type(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProduct_TypeArgs): Promise<Product_Type | null>;
}
