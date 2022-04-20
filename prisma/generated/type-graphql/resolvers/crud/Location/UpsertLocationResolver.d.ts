import { GraphQLResolveInfo } from "graphql";
import { UpsertLocationArgs } from "./args/UpsertLocationArgs";
import { Location } from "../../../models/Location";
export declare class UpsertLocationResolver {
    upsertLocation(ctx: any, info: GraphQLResolveInfo, args: UpsertLocationArgs): Promise<Location>;
}
