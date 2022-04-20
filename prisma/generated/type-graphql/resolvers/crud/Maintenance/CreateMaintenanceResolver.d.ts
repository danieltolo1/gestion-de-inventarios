import { GraphQLResolveInfo } from "graphql";
import { CreateMaintenanceArgs } from "./args/CreateMaintenanceArgs";
import { Maintenance } from "../../../models/Maintenance";
export declare class CreateMaintenanceResolver {
    createMaintenance(ctx: any, info: GraphQLResolveInfo, args: CreateMaintenanceArgs): Promise<Maintenance>;
}
