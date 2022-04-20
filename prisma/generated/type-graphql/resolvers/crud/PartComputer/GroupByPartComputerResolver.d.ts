import { GraphQLResolveInfo } from "graphql";
import { GroupByPartComputerArgs } from "./args/GroupByPartComputerArgs";
import { PartComputerGroupBy } from "../../outputs/PartComputerGroupBy";
export declare class GroupByPartComputerResolver {
    groupByPartComputer(ctx: any, info: GraphQLResolveInfo, args: GroupByPartComputerArgs): Promise<PartComputerGroupBy[]>;
}
