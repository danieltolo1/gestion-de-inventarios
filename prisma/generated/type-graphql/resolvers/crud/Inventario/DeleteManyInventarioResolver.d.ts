import { GraphQLResolveInfo } from "graphql";
import { DeleteManyInventarioArgs } from "./args/DeleteManyInventarioArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInventarioResolver {
    deleteManyInventario(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInventarioArgs): Promise<AffectedRowsOutput>;
}
