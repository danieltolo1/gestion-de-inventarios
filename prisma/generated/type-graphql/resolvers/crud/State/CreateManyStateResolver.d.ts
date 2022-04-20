import { GraphQLResolveInfo } from "graphql";
import { CreateManyStateArgs } from "./args/CreateManyStateArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyStateResolver {
    createManyState(ctx: any, info: GraphQLResolveInfo, args: CreateManyStateArgs): Promise<AffectedRowsOutput>;
}
