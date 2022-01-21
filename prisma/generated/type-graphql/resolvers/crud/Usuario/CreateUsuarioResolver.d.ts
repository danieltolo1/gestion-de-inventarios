import { GraphQLResolveInfo } from "graphql";
import { CreateUsuarioArgs } from "./args/CreateUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class CreateUsuarioResolver {
    createUsuario(ctx: any, info: GraphQLResolveInfo, args: CreateUsuarioArgs): Promise<Usuario>;
}
