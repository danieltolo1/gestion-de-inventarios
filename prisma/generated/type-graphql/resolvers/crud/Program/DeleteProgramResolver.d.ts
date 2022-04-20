import { GraphQLResolveInfo } from "graphql";
import { DeleteProgramArgs } from "./args/DeleteProgramArgs";
import { Program } from "../../../models/Program";
export declare class DeleteProgramResolver {
    deleteProgram(ctx: any, info: GraphQLResolveInfo, args: DeleteProgramArgs): Promise<Program | null>;
}
