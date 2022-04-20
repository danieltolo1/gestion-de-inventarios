import { GraphQLResolveInfo } from "graphql";
import { FindManyMaintenanceArgs } from "./args/FindManyMaintenanceArgs";
import { Maintenance } from "../../../models/Maintenance";
export declare class FindManyMaintenanceResolver {
    maintenances(ctx: any, info: GraphQLResolveInfo, args: FindManyMaintenanceArgs): Promise<Maintenance[]>;
}
