import { GraphQLResolveInfo } from "graphql";
import { UpdateProduct_TypeArgs } from "./args/UpdateProduct_TypeArgs";
import { Product_Type } from "../../../models/Product_Type";
export declare class UpdateProduct_TypeResolver {
    updateProduct_Type(ctx: any, info: GraphQLResolveInfo, args: UpdateProduct_TypeArgs): Promise<Product_Type | null>;
}
