import { GraphQLResolveInfo } from "graphql";
import { GroupByProgramArgs } from "./args/GroupByProgramArgs";
import { ProgramGroupBy } from "../../outputs/ProgramGroupBy";
export declare class GroupByProgramResolver {
    groupByProgram(ctx: any, info: GraphQLResolveInfo, args: GroupByProgramArgs): Promise<ProgramGroupBy[]>;
}
