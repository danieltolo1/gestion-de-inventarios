import { GraphQLResolveInfo } from "graphql";
import { DeleteMovimientoInventarioArgs } from "./args/DeleteMovimientoInventarioArgs";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
export declare class DeleteMovimientoInventarioResolver {
    deleteMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: DeleteMovimientoInventarioArgs): Promise<MovimientoInventario | null>;
}
