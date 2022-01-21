import { GraphQLResolveInfo } from "graphql";
import { CreateProductoArgs } from "./args/CreateProductoArgs";
import { Producto } from "../../../models/Producto";
export declare class CreateProductoResolver {
    createProducto(ctx: any, info: GraphQLResolveInfo, args: CreateProductoArgs): Promise<Producto>;
}
