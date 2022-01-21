import { GraphQLResolveInfo } from "graphql";
import { UpdateManyInventarioArgs } from "./args/UpdateManyInventarioArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInventarioResolver {
    updateManyInventario(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInventarioArgs): Promise<AffectedRowsOutput>;
}
