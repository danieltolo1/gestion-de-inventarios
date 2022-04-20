import { GraphQLResolveInfo } from "graphql";
import { DeleteMaintenanceArgs } from "./args/DeleteMaintenanceArgs";
import { Maintenance } from "../../../models/Maintenance";
export declare class DeleteMaintenanceResolver {
    deleteMaintenance(ctx: any, info: GraphQLResolveInfo, args: DeleteMaintenanceArgs): Promise<Maintenance | null>;
}
