import { GraphQLResolveInfo } from "graphql";
import { FindManyUsuarioArgs } from "./args/FindManyUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class FindManyUsuarioResolver {
    usuarios(ctx: any, info: GraphQLResolveInfo, args: FindManyUsuarioArgs): Promise<Usuario[]>;
}
