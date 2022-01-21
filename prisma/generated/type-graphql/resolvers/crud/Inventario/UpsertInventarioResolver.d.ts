import { GraphQLResolveInfo } from "graphql";
import { UpsertInventarioArgs } from "./args/UpsertInventarioArgs";
import { Inventario } from "../../../models/Inventario";
export declare class UpsertInventarioResolver {
    upsertInventario(ctx: any, info: GraphQLResolveInfo, args: UpsertInventarioArgs): Promise<Inventario>;
}
