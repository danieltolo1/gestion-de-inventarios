import { GraphQLResolveInfo } from "graphql";
import { UpdateInventarioArgs } from "./args/UpdateInventarioArgs";
import { Inventario } from "../../../models/Inventario";
export declare class UpdateInventarioResolver {
    updateInventario(ctx: any, info: GraphQLResolveInfo, args: UpdateInventarioArgs): Promise<Inventario | null>;
}
