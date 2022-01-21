import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMovimientoInventarioArgs } from "./args/UpdateManyMovimientoInventarioArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMovimientoInventarioResolver {
    updateManyMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMovimientoInventarioArgs): Promise<AffectedRowsOutput>;
}
