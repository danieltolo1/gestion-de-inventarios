import { GraphQLResolveInfo } from "graphql";
import { FindFirstProgramArgs } from "./args/FindFirstProgramArgs";
import { Program } from "../../../models/Program";
export declare class FindFirstProgramResolver {
    findFirstProgram(ctx: any, info: GraphQLResolveInfo, args: FindFirstProgramArgs): Promise<Program | null>;
}
