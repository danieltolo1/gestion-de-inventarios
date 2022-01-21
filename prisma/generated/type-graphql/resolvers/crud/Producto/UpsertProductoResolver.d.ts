import { GraphQLResolveInfo } from "graphql";
import { UpsertProductoArgs } from "./args/UpsertProductoArgs";
import { Producto } from "../../../models/Producto";
export declare class UpsertProductoResolver {
    upsertProducto(ctx: any, info: GraphQLResolveInfo, args: UpsertProductoArgs): Promise<Producto>;
}
