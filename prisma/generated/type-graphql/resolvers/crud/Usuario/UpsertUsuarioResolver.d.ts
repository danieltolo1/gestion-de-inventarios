import { GraphQLResolveInfo } from "graphql";
import { UpsertUsuarioArgs } from "./args/UpsertUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class UpsertUsuarioResolver {
    upsertUsuario(ctx: any, info: GraphQLResolveInfo, args: UpsertUsuarioArgs): Promise<Usuario>;
}
