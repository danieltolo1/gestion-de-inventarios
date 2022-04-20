import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMaintenanceArgs } from "./args/UpdateManyMaintenanceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMaintenanceResolver {
    updateManyMaintenance(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMaintenanceArgs): Promise<AffectedRowsOutput>;
}
