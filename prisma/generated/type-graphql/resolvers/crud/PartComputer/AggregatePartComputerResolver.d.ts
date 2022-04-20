import { GraphQLResolveInfo } from "graphql";
import { AggregatePartComputerArgs } from "./args/AggregatePartComputerArgs";
import { AggregatePartComputer } from "../../outputs/AggregatePartComputer";
export declare class AggregatePartComputerResolver {
    aggregatePartComputer(ctx: any, info: GraphQLResolveInfo, args: AggregatePartComputerArgs): Promise<AggregatePartComputer>;
}
