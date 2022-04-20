import { GraphQLResolveInfo } from "graphql";
import { UpdateMaintenanceArgs } from "./args/UpdateMaintenanceArgs";
import { Maintenance } from "../../../models/Maintenance";
export declare class UpdateMaintenanceResolver {
    updateMaintenance(ctx: any, info: GraphQLResolveInfo, args: UpdateMaintenanceArgs): Promise<Maintenance | null>;
}
