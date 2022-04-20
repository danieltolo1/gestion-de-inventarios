import { GraphQLResolveInfo } from "graphql";
import { GroupByProduct_TypeArgs } from "./args/GroupByProduct_TypeArgs";
import { Product_TypeGroupBy } from "../../outputs/Product_TypeGroupBy";
export declare class GroupByProduct_TypeResolver {
    groupByProduct_Type(ctx: any, info: GraphQLResolveInfo, args: GroupByProduct_TypeArgs): Promise<Product_TypeGroupBy[]>;
}
