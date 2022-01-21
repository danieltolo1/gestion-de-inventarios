import { GraphQLResolveInfo } from "graphql";
import { UpsertMovimientoInventarioArgs } from "./args/UpsertMovimientoInventarioArgs";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
export declare class UpsertMovimientoInventarioResolver {
    upsertMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: UpsertMovimientoInventarioArgs): Promise<MovimientoInventario>;
}
