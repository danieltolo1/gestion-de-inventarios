import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLocationArgs } from "./args/FindUniqueLocationArgs";
import { Location } from "../../../models/Location";
export declare class FindUniqueLocationResolver {
    location(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLocationArgs): Promise<Location | null>;
}
