import { GraphQLResolveInfo } from "graphql";
import { FindFirstSoftwareComputerArgs } from "./args/FindFirstSoftwareComputerArgs";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
export declare class FindFirstSoftwareComputerResolver {
    findFirstSoftwareComputer(ctx: any, info: GraphQLResolveInfo, args: FindFirstSoftwareComputerArgs): Promise<SoftwareComputer | null>;
}
