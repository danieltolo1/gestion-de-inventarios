import { GraphQLResolveInfo } from "graphql";
import { GroupByMaintenanceArgs } from "./args/GroupByMaintenanceArgs";
import { MaintenanceGroupBy } from "../../outputs/MaintenanceGroupBy";
export declare class GroupByMaintenanceResolver {
    groupByMaintenance(ctx: any, info: GraphQLResolveInfo, args: GroupByMaintenanceArgs): Promise<MaintenanceGroupBy[]>;
}
