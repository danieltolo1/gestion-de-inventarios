import { GraphQLResolveInfo } from "graphql";
import { FindManyMovimientoInventarioArgs } from "./args/FindManyMovimientoInventarioArgs";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
export declare class FindManyMovimientoInventarioResolver {
    movimientoInventarios(ctx: any, info: GraphQLResolveInfo, args: FindManyMovimientoInventarioArgs): Promise<MovimientoInventario[]>;
}
