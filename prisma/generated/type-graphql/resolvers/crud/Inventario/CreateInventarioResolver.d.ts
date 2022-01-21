import { GraphQLResolveInfo } from "graphql";
import { CreateInventarioArgs } from "./args/CreateInventarioArgs";
import { Inventario } from "../../../models/Inventario";
export declare class CreateInventarioResolver {
    createInventario(ctx: any, info: GraphQLResolveInfo, args: CreateInventarioArgs): Promise<Inventario>;
}
