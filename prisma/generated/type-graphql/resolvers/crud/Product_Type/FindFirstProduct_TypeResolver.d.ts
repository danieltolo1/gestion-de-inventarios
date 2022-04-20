import { GraphQLResolveInfo } from "graphql";
import { FindFirstProduct_TypeArgs } from "./args/FindFirstProduct_TypeArgs";
import { Product_Type } from "../../../models/Product_Type";
export declare class FindFirstProduct_TypeResolver {
    findFirstProduct_Type(ctx: any, info: GraphQLResolveInfo, args: FindFirstProduct_TypeArgs): Promise<Product_Type | null>;
}
