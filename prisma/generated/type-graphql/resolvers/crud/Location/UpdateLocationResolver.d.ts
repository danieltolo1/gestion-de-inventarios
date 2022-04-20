import { GraphQLResolveInfo } from "graphql";
import { UpdateLocationArgs } from "./args/UpdateLocationArgs";
import { Location } from "../../../models/Location";
export declare class UpdateLocationResolver {
    updateLocation(ctx: any, info: GraphQLResolveInfo, args: UpdateLocationArgs): Promise<Location | null>;
}
