import { GraphQLResolveInfo } from "graphql";
import { UpdateProductoArgs } from "./args/UpdateProductoArgs";
import { Producto } from "../../../models/Producto";
export declare class UpdateProductoResolver {
    updateProducto(ctx: any, info: GraphQLResolveInfo, args: UpdateProductoArgs): Promise<Producto | null>;
}
