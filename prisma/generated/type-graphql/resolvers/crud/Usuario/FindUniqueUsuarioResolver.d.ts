import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUsuarioArgs } from "./args/FindUniqueUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class FindUniqueUsuarioResolver {
    usuario(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUsuarioArgs): Promise<Usuario | null>;
}
