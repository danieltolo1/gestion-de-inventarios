import { GraphQLResolveInfo } from "graphql";
import { FindFirstLocationArgs } from "./args/FindFirstLocationArgs";
import { Location } from "../../../models/Location";
export declare class FindFirstLocationResolver {
    findFirstLocation(ctx: any, info: GraphQLResolveInfo, args: FindFirstLocationArgs): Promise<Location | null>;
}
