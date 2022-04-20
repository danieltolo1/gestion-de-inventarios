import { GraphQLResolveInfo } from "graphql";
import { FindFirstMaintenanceArgs } from "./args/FindFirstMaintenanceArgs";
import { Maintenance } from "../../../models/Maintenance";
export declare class FindFirstMaintenanceResolver {
    findFirstMaintenance(ctx: any, info: GraphQLResolveInfo, args: FindFirstMaintenanceArgs): Promise<Maintenance | null>;
}
