import { GraphQLResolveInfo } from "graphql";
import { AggregateMaintenanceArgs } from "./args/AggregateMaintenanceArgs";
import { AggregateMaintenance } from "../../outputs/AggregateMaintenance";
export declare class AggregateMaintenanceResolver {
    aggregateMaintenance(ctx: any, info: GraphQLResolveInfo, args: AggregateMaintenanceArgs): Promise<AggregateMaintenance>;
}
