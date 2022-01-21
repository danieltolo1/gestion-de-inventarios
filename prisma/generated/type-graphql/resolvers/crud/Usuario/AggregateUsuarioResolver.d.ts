import { GraphQLResolveInfo } from "graphql";
import { AggregateUsuarioArgs } from "./args/AggregateUsuarioArgs";
import { AggregateUsuario } from "../../outputs/AggregateUsuario";
export declare class AggregateUsuarioResolver {
    aggregateUsuario(ctx: any, info: GraphQLResolveInfo, args: AggregateUsuarioArgs): Promise<AggregateUsuario>;
}
