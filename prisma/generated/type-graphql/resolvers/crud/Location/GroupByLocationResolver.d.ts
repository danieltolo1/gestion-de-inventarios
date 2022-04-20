import { GraphQLResolveInfo } from "graphql";
import { GroupByLocationArgs } from "./args/GroupByLocationArgs";
import { LocationGroupBy } from "../../outputs/LocationGroupBy";
export declare class GroupByLocationResolver {
    groupByLocation(ctx: any, info: GraphQLResolveInfo, args: GroupByLocationArgs): Promise<LocationGroupBy[]>;
}
