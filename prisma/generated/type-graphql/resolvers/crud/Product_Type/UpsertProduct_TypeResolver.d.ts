import { GraphQLResolveInfo } from "graphql";
import { UpsertProduct_TypeArgs } from "./args/UpsertProduct_TypeArgs";
import { Product_Type } from "../../../models/Product_Type";
export declare class UpsertProduct_TypeResolver {
    upsertProduct_Type(ctx: any, info: GraphQLResolveInfo, args: UpsertProduct_TypeArgs): Promise<Product_Type>;
}
