import { GraphQLResolveInfo } from "graphql";
import { GroupByProductoArgs } from "./args/GroupByProductoArgs";
import { ProductoGroupBy } from "../../outputs/ProductoGroupBy";
export declare class GroupByProductoResolver {
    groupByProducto(ctx: any, info: GraphQLResolveInfo, args: GroupByProductoArgs): Promise<ProductoGroupBy[]>;
}
