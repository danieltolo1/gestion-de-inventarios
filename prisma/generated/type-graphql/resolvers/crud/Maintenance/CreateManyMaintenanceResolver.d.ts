import { GraphQLResolveInfo } from "graphql";
import { CreateManyMaintenanceArgs } from "./args/CreateManyMaintenanceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMaintenanceResolver {
    createManyMaintenance(ctx: any, info: GraphQLResolveInfo, args: CreateManyMaintenanceArgs): Promise<AffectedRowsOutput>;
}
