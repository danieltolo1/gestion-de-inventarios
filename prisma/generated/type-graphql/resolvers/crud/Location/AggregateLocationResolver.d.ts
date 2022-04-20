import { GraphQLResolveInfo } from "graphql";
import { AggregateLocationArgs } from "./args/AggregateLocationArgs";
import { AggregateLocation } from "../../outputs/AggregateLocation";
export declare class AggregateLocationResolver {
    aggregateLocation(ctx: any, info: GraphQLResolveInfo, args: AggregateLocationArgs): Promise<AggregateLocation>;
}
