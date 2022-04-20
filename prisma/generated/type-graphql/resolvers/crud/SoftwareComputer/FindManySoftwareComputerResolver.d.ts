import { GraphQLResolveInfo } from "graphql";
import { FindManySoftwareComputerArgs } from "./args/FindManySoftwareComputerArgs";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
export declare class FindManySoftwareComputerResolver {
    softwareComputers(ctx: any, info: GraphQLResolveInfo, args: FindManySoftwareComputerArgs): Promise<SoftwareComputer[]>;
}
