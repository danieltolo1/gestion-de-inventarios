import { GraphQLResolveInfo } from "graphql";
import { AggregateProductoArgs } from "./args/AggregateProductoArgs";
import { AggregateProducto } from "../../outputs/AggregateProducto";
export declare class AggregateProductoResolver {
    aggregateProducto(ctx: any, info: GraphQLResolveInfo, args: AggregateProductoArgs): Promise<AggregateProducto>;
}
