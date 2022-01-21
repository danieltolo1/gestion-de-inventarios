import { GraphQLResolveInfo } from "graphql";
import { CreateMovimientoInventarioArgs } from "./args/CreateMovimientoInventarioArgs";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
export declare class CreateMovimientoInventarioResolver {
    createMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: CreateMovimientoInventarioArgs): Promise<MovimientoInventario>;
}
