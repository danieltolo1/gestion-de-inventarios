import { GraphQLResolveInfo } from "graphql";
import { AggregateMovimientoInventarioArgs } from "./args/AggregateMovimientoInventarioArgs";
import { AggregateMovimientoInventario } from "../../outputs/AggregateMovimientoInventario";
export declare class AggregateMovimientoInventarioResolver {
    aggregateMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: AggregateMovimientoInventarioArgs): Promise<AggregateMovimientoInventario>;
}
