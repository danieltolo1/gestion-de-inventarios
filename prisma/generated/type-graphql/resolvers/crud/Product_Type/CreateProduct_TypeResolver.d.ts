import { GraphQLResolveInfo } from "graphql";
import { CreateProduct_TypeArgs } from "./args/CreateProduct_TypeArgs";
import { Product_Type } from "../../../models/Product_Type";
export declare class CreateProduct_TypeResolver {
    createProduct_Type(ctx: any, info: GraphQLResolveInfo, args: CreateProduct_TypeArgs): Promise<Product_Type>;
}
