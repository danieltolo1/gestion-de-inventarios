import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInventarioArgs } from "./args/FindUniqueInventarioArgs";
import { Inventario } from "../../../models/Inventario";
export declare class FindUniqueInventarioResolver {
    inventario(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInventarioArgs): Promise<Inventario | null>;
}
