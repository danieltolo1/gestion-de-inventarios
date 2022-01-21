import { GraphQLResolveInfo } from "graphql";
import { DeleteInventarioArgs } from "./args/DeleteInventarioArgs";
import { Inventario } from "../../../models/Inventario";
export declare class DeleteInventarioResolver {
    deleteInventario(ctx: any, info: GraphQLResolveInfo, args: DeleteInventarioArgs): Promise<Inventario | null>;
}
