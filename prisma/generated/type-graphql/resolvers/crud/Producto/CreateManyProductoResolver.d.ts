import { GraphQLResolveInfo } from "graphql";
import { CreateManyProductoArgs } from "./args/CreateManyProductoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProductoResolver {
    createManyProducto(ctx: any, info: GraphQLResolveInfo, args: CreateManyProductoArgs): Promise<AffectedRowsOutput>;
}
