import { GraphQLResolveInfo } from "graphql";
import { AggregateInventarioArgs } from "./args/AggregateInventarioArgs";
import { AggregateInventario } from "../../outputs/AggregateInventario";
export declare class AggregateInventarioResolver {
    aggregateInventario(ctx: any, info: GraphQLResolveInfo, args: AggregateInventarioArgs): Promise<AggregateInventario>;
}
