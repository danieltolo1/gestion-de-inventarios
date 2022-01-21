import { GraphQLResolveInfo } from "graphql";
import { FindFirstProductoArgs } from "./args/FindFirstProductoArgs";
import { Producto } from "../../../models/Producto";
export declare class FindFirstProductoResolver {
    findFirstProducto(ctx: any, info: GraphQLResolveInfo, args: FindFirstProductoArgs): Promise<Producto | null>;
}
