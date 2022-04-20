import { GraphQLResolveInfo } from "graphql";
import { CreatePartComputerArgs } from "./args/CreatePartComputerArgs";
import { PartComputer } from "../../../models/PartComputer";
export declare class CreatePartComputerResolver {
    createPartComputer(ctx: any, info: GraphQLResolveInfo, args: CreatePartComputerArgs): Promise<PartComputer>;
}
