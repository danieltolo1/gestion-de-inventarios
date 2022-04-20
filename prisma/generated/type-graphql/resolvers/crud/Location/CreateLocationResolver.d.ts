import { GraphQLResolveInfo } from "graphql";
import { CreateLocationArgs } from "./args/CreateLocationArgs";
import { Location } from "../../../models/Location";
export declare class CreateLocationResolver {
    createLocation(ctx: any, info: GraphQLResolveInfo, args: CreateLocationArgs): Promise<Location>;
}
