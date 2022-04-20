import { GraphQLResolveInfo } from "graphql";
import { DeleteSoftwareComputerArgs } from "./args/DeleteSoftwareComputerArgs";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
export declare class DeleteSoftwareComputerResolver {
    deleteSoftwareComputer(ctx: any, info: GraphQLResolveInfo, args: DeleteSoftwareComputerArgs): Promise<SoftwareComputer | null>;
}
