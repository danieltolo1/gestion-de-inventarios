import { GraphQLResolveInfo } from "graphql";
import { FindFirstUsuarioArgs } from "./args/FindFirstUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class FindFirstUsuarioResolver {
    findFirstUsuario(ctx: any, info: GraphQLResolveInfo, args: FindFirstUsuarioArgs): Promise<Usuario | null>;
}
