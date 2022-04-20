import { GraphQLResolveInfo } from "graphql";
import { UpdateManyLocationArgs } from "./args/UpdateManyLocationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLocationResolver {
    updateManyLocation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLocationArgs): Promise<AffectedRowsOutput>;
}
