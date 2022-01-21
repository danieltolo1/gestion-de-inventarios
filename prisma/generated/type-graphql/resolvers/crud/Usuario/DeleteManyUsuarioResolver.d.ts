import { GraphQLResolveInfo } from "graphql";
import { DeleteManyUsuarioArgs } from "./args/DeleteManyUsuarioArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUsuarioResolver {
    deleteManyUsuario(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUsuarioArgs): Promise<AffectedRowsOutput>;
}
