import { GraphQLResolveInfo } from "graphql";
import { DeleteProduct_TypeArgs } from "./args/DeleteProduct_TypeArgs";
import { Product_Type } from "../../../models/Product_Type";
export declare class DeleteProduct_TypeResolver {
    deleteProduct_Type(ctx: any, info: GraphQLResolveInfo, args: DeleteProduct_TypeArgs): Promise<Product_Type | null>;
}
