import { GraphQLResolveInfo } from "graphql";
import { GroupByInventarioArgs } from "./args/GroupByInventarioArgs";
import { InventarioGroupBy } from "../../outputs/InventarioGroupBy";
export declare class GroupByInventarioResolver {
    groupByInventario(ctx: any, info: GraphQLResolveInfo, args: GroupByInventarioArgs): Promise<InventarioGroupBy[]>;
}
