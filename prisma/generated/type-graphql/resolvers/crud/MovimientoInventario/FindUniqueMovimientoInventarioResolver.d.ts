import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovimientoInventarioArgs } from "./args/FindUniqueMovimientoInventarioArgs";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
export declare class FindUniqueMovimientoInventarioResolver {
    movimientoInventario(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMovimientoInventarioArgs): Promise<MovimientoInventario | null>;
}
