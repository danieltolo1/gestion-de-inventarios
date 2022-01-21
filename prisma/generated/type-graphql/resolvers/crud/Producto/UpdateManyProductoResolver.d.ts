import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProductoArgs } from "./args/UpdateManyProductoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProductoResolver {
    updateManyProducto(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProductoArgs): Promise<AffectedRowsOutput>;
}
