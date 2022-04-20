import { GraphQLResolveInfo } from "graphql";
import { FindManyProgramArgs } from "./args/FindManyProgramArgs";
import { Program } from "../../../models/Program";
export declare class FindManyProgramResolver {
    programs(ctx: any, info: GraphQLResolveInfo, args: FindManyProgramArgs): Promise<Program[]>;
}
