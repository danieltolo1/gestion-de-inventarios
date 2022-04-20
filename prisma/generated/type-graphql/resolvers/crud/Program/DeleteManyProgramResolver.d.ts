import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProgramArgs } from "./args/DeleteManyProgramArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProgramResolver {
    deleteManyProgram(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProgramArgs): Promise<AffectedRowsOutput>;
}
