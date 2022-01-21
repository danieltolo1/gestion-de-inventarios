import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProductoArgs } from "./args/FindUniqueProductoArgs";
import { Producto } from "../../../models/Producto";
export declare class FindUniqueProductoResolver {
    producto(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProductoArgs): Promise<Producto | null>;
}
