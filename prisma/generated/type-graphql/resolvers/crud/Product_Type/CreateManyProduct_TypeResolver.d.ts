import { GraphQLResolveInfo } from "graphql";
import { CreateManyProduct_TypeArgs } from "./args/CreateManyProduct_TypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProduct_TypeResolver {
    createManyProduct_Type(ctx: any, info: GraphQLResolveInfo, args: CreateManyProduct_TypeArgs): Promise<AffectedRowsOutput>;
}
