import { GraphQLResolveInfo } from "graphql";
import { AggregateStateArgs } from "./args/AggregateStateArgs";
import { AggregateState } from "../../outputs/AggregateState";
export declare class AggregateStateResolver {
    aggregateState(ctx: any, info: GraphQLResolveInfo, args: AggregateStateArgs): Promise<AggregateState>;
}
