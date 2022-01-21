import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProductoArgs } from "./args/DeleteManyProductoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProductoResolver {
    deleteManyProducto(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProductoArgs): Promise<AffectedRowsOutput>;
}
