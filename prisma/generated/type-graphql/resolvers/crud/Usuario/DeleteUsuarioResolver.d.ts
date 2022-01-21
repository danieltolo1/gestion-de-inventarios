import { GraphQLResolveInfo } from "graphql";
import { DeleteUsuarioArgs } from "./args/DeleteUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class DeleteUsuarioResolver {
    deleteUsuario(ctx: any, info: GraphQLResolveInfo, args: DeleteUsuarioArgs): Promise<Usuario | null>;
}
