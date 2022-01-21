import { GraphQLResolveInfo } from "graphql";
import { FindManyProductoArgs } from "./args/FindManyProductoArgs";
import { Producto } from "../../../models/Producto";
export declare class FindManyProductoResolver {
    productos(ctx: any, info: GraphQLResolveInfo, args: FindManyProductoArgs): Promise<Producto[]>;
}
