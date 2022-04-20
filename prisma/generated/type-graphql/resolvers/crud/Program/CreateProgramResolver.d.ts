import { GraphQLResolveInfo } from "graphql";
import { CreateProgramArgs } from "./args/CreateProgramArgs";
import { Program } from "../../../models/Program";
export declare class CreateProgramResolver {
    createProgram(ctx: any, info: GraphQLResolveInfo, args: CreateProgramArgs): Promise<Program>;
}
