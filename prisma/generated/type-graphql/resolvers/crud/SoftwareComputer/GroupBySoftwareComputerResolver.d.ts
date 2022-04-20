import { GraphQLResolveInfo } from "graphql";
import { GroupBySoftwareComputerArgs } from "./args/GroupBySoftwareComputerArgs";
import { SoftwareComputerGroupBy } from "../../outputs/SoftwareComputerGroupBy";
export declare class GroupBySoftwareComputerResolver {
    groupBySoftwareComputer(ctx: any, info: GraphQLResolveInfo, args: GroupBySoftwareComputerArgs): Promise<SoftwareComputerGroupBy[]>;
}
