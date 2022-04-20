import { GraphQLResolveInfo } from "graphql";
import { UpdateSoftwareComputerArgs } from "./args/UpdateSoftwareComputerArgs";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
export declare class UpdateSoftwareComputerResolver {
    updateSoftwareComputer(ctx: any, info: GraphQLResolveInfo, args: UpdateSoftwareComputerArgs): Promise<SoftwareComputer | null>;
}
