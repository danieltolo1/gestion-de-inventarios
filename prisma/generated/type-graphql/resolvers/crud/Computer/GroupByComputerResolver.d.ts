import { GraphQLResolveInfo } from "graphql";
import { GroupByComputerArgs } from "./args/GroupByComputerArgs";
import { ComputerGroupBy } from "../../outputs/ComputerGroupBy";
export declare class GroupByComputerResolver {
    groupByComputer(ctx: any, info: GraphQLResolveInfo, args: GroupByComputerArgs): Promise<ComputerGroupBy[]>;
}
