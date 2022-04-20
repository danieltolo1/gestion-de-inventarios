import { GraphQLResolveInfo } from "graphql";
import { UpsertMaintenanceArgs } from "./args/UpsertMaintenanceArgs";
import { Maintenance } from "../../../models/Maintenance";
export declare class UpsertMaintenanceResolver {
    upsertMaintenance(ctx: any, info: GraphQLResolveInfo, args: UpsertMaintenanceArgs): Promise<Maintenance>;
}
