import { GraphQLResolveInfo } from "graphql";
import { FindManyLocationArgs } from "./args/FindManyLocationArgs";
import { Location } from "../../../models/Location";
export declare class FindManyLocationResolver {
    locations(ctx: any, info: GraphQLResolveInfo, args: FindManyLocationArgs): Promise<Location[]>;
}
