import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMaintenanceArgs } from "./args/DeleteManyMaintenanceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMaintenanceResolver {
    deleteManyMaintenance(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMaintenanceArgs): Promise<AffectedRowsOutput>;
}
