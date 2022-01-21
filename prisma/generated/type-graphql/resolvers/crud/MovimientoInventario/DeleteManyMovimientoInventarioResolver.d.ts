import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMovimientoInventarioArgs } from "./args/DeleteManyMovimientoInventarioArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMovimientoInventarioResolver {
    deleteManyMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMovimientoInventarioArgs): Promise<AffectedRowsOutput>;
}
