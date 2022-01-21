import { GraphQLResolveInfo } from "graphql";
import { CreateManyUsuarioArgs } from "./args/CreateManyUsuarioArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyUsuarioResolver {
    createManyUsuario(ctx: any, info: GraphQLResolveInfo, args: CreateManyUsuarioArgs): Promise<AffectedRowsOutput>;
}
