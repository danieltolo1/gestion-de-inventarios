import { GraphQLResolveInfo } from "graphql";
import { CreateManyMovimientoInventarioArgs } from "./args/CreateManyMovimientoInventarioArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMovimientoInventarioResolver {
    createManyMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: CreateManyMovimientoInventarioArgs): Promise<AffectedRowsOutput>;
}
