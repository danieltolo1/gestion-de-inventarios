import { GraphQLResolveInfo } from "graphql";
import { GroupByUsuarioArgs } from "./args/GroupByUsuarioArgs";
import { UsuarioGroupBy } from "../../outputs/UsuarioGroupBy";
export declare class GroupByUsuarioResolver {
    groupByUsuario(ctx: any, info: GraphQLResolveInfo, args: GroupByUsuarioArgs): Promise<UsuarioGroupBy[]>;
}
