import { GraphQLResolveInfo } from "graphql";
import { DeleteManyLocationArgs } from "./args/DeleteManyLocationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLocationResolver {
    deleteManyLocation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLocationArgs): Promise<AffectedRowsOutput>;
}
