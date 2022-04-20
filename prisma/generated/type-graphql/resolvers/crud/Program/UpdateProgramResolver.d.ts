import { GraphQLResolveInfo } from "graphql";
import { UpdateProgramArgs } from "./args/UpdateProgramArgs";
import { Program } from "../../../models/Program";
export declare class UpdateProgramResolver {
    updateProgram(ctx: any, info: GraphQLResolveInfo, args: UpdateProgramArgs): Promise<Program | null>;
}
