import { GraphQLResolveInfo } from "graphql";
import { UpsertSoftwareComputerArgs } from "./args/UpsertSoftwareComputerArgs";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
export declare class UpsertSoftwareComputerResolver {
    upsertSoftwareComputer(ctx: any, info: GraphQLResolveInfo, args: UpsertSoftwareComputerArgs): Promise<SoftwareComputer>;
}
