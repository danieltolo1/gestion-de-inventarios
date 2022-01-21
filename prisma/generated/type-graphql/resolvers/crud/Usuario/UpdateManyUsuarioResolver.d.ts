import { GraphQLResolveInfo } from "graphql";
import { UpdateManyUsuarioArgs } from "./args/UpdateManyUsuarioArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyUsuarioResolver {
    updateManyUsuario(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUsuarioArgs): Promise<AffectedRowsOutput>;
}
