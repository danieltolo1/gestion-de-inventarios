import { GraphQLResolveInfo } from "graphql";
import { UpdateMovimientoInventarioArgs } from "./args/UpdateMovimientoInventarioArgs";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
export declare class UpdateMovimientoInventarioResolver {
    updateMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: UpdateMovimientoInventarioArgs): Promise<MovimientoInventario | null>;
}
