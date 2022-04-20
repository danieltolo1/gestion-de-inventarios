import { GraphQLResolveInfo } from "graphql";
import { DeleteManyStateArgs } from "./args/DeleteManyStateArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyStateResolver {
    deleteManyState(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStateArgs): Promise<AffectedRowsOutput>;
}
