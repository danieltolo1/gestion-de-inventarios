import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProduct_TypeArgs } from "./args/UpdateManyProduct_TypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProduct_TypeResolver {
    updateManyProduct_Type(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProduct_TypeArgs): Promise<AffectedRowsOutput>;
}
