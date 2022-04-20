import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProgramArgs } from "./args/UpdateManyProgramArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProgramResolver {
    updateManyProgram(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProgramArgs): Promise<AffectedRowsOutput>;
}
