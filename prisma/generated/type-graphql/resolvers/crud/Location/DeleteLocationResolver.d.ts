import { GraphQLResolveInfo } from "graphql";
import { DeleteLocationArgs } from "./args/DeleteLocationArgs";
import { Location } from "../../../models/Location";
export declare class DeleteLocationResolver {
    deleteLocation(ctx: any, info: GraphQLResolveInfo, args: DeleteLocationArgs): Promise<Location | null>;
}
