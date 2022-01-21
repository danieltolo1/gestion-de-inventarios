import { GraphQLResolveInfo } from "graphql";
import { FindFirstMovimientoInventarioArgs } from "./args/FindFirstMovimientoInventarioArgs";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
export declare class FindFirstMovimientoInventarioResolver {
    findFirstMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: FindFirstMovimientoInventarioArgs): Promise<MovimientoInventario | null>;
}
