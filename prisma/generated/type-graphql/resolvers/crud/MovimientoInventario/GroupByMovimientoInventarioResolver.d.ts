import { GraphQLResolveInfo } from "graphql";
import { GroupByMovimientoInventarioArgs } from "./args/GroupByMovimientoInventarioArgs";
import { MovimientoInventarioGroupBy } from "../../outputs/MovimientoInventarioGroupBy";
export declare class GroupByMovimientoInventarioResolver {
    groupByMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: GroupByMovimientoInventarioArgs): Promise<MovimientoInventarioGroupBy[]>;
}
