import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProduct_TypeArgs } from "./args/DeleteManyProduct_TypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProduct_TypeResolver {
    deleteManyProduct_Type(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProduct_TypeArgs): Promise<AffectedRowsOutput>;
}
