import { GraphQLResolveInfo } from "graphql";
import { AggregateComputerArgs } from "./args/AggregateComputerArgs";
import { AggregateComputer } from "../../outputs/AggregateComputer";
export declare class AggregateComputerResolver {
    aggregateComputer(ctx: any, info: GraphQLResolveInfo, args: AggregateComputerArgs): Promise<AggregateComputer>;
}
