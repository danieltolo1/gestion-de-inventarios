import { GraphQLResolveInfo } from "graphql";
import { UpdateManyStateArgs } from "./args/UpdateManyStateArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyStateResolver {
    updateManyState(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStateArgs): Promise<AffectedRowsOutput>;
}
