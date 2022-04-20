import { GraphQLResolveInfo } from "graphql";
import { CreateManyProgramArgs } from "./args/CreateManyProgramArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProgramResolver {
    createManyProgram(ctx: any, info: GraphQLResolveInfo, args: CreateManyProgramArgs): Promise<AffectedRowsOutput>;
}
