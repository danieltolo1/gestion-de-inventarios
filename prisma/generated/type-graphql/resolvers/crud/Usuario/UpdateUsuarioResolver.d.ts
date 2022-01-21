import { GraphQLResolveInfo } from "graphql";
import { UpdateUsuarioArgs } from "./args/UpdateUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class UpdateUsuarioResolver {
    updateUsuario(ctx: any, info: GraphQLResolveInfo, args: UpdateUsuarioArgs): Promise<Usuario | null>;
}
