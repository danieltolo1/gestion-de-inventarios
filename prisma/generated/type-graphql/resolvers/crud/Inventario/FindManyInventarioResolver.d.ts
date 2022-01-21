import { GraphQLResolveInfo } from "graphql";
import { FindManyInventarioArgs } from "./args/FindManyInventarioArgs";
import { Inventario } from "../../../models/Inventario";
export declare class FindManyInventarioResolver {
    inventarios(ctx: any, info: GraphQLResolveInfo, args: FindManyInventarioArgs): Promise<Inventario[]>;
}
