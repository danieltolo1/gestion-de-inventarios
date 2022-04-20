import { GraphQLResolveInfo } from "graphql";
import { CreateSoftwareComputerArgs } from "./args/CreateSoftwareComputerArgs";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
export declare class CreateSoftwareComputerResolver {
    createSoftwareComputer(ctx: any, info: GraphQLResolveInfo, args: CreateSoftwareComputerArgs): Promise<SoftwareComputer>;
}
