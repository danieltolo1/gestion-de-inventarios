import { GraphQLResolveInfo } from "graphql";
import { FindFirstInventarioArgs } from "./args/FindFirstInventarioArgs";
import { Inventario } from "../../../models/Inventario";
export declare class FindFirstInventarioResolver {
    findFirstInventario(ctx: any, info: GraphQLResolveInfo, args: FindFirstInventarioArgs): Promise<Inventario | null>;
}
