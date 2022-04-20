import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSoftwareComputerArgs } from "./args/FindUniqueSoftwareComputerArgs";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
export declare class FindUniqueSoftwareComputerResolver {
    softwareComputer(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSoftwareComputerArgs): Promise<SoftwareComputer | null>;
}
