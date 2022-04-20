import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMaintenanceArgs } from "./args/FindUniqueMaintenanceArgs";
import { Maintenance } from "../../../models/Maintenance";
export declare class FindUniqueMaintenanceResolver {
    maintenance(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMaintenanceArgs): Promise<Maintenance | null>;
}
