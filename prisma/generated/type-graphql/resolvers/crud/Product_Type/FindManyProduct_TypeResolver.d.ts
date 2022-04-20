import { GraphQLResolveInfo } from "graphql";
import { FindManyProduct_TypeArgs } from "./args/FindManyProduct_TypeArgs";
import { Product_Type } from "../../../models/Product_Type";
export declare class FindManyProduct_TypeResolver {
    product_Types(ctx: any, info: GraphQLResolveInfo, args: FindManyProduct_TypeArgs): Promise<Product_Type[]>;
}
