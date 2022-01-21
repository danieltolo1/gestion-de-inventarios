import { GraphQLResolveInfo } from "graphql";
import { DeleteProductoArgs } from "./args/DeleteProductoArgs";
import { Producto } from "../../../models/Producto";
export declare class DeleteProductoResolver {
    deleteProducto(ctx: any, info: GraphQLResolveInfo, args: DeleteProductoArgs): Promise<Producto | null>;
}
