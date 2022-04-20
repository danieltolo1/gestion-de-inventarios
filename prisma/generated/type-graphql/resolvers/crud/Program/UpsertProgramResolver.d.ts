import { GraphQLResolveInfo } from "graphql";
import { UpsertProgramArgs } from "./args/UpsertProgramArgs";
import { Program } from "../../../models/Program";
export declare class UpsertProgramResolver {
    upsertProgram(ctx: any, info: GraphQLResolveInfo, args: UpsertProgramArgs): Promise<Program>;
}
