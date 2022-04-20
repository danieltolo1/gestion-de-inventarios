import { GraphQLResolveInfo } from "graphql";
import { GroupByStateArgs } from "./args/GroupByStateArgs";
import { StateGroupBy } from "../../outputs/StateGroupBy";
export declare class GroupByStateResolver {
    groupByState(ctx: any, info: GraphQLResolveInfo, args: GroupByStateArgs): Promise<StateGroupBy[]>;
}
