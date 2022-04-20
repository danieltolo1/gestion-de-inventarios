import { GraphQLResolveInfo } from "graphql";
import { CreateComputerArgs } from "./args/CreateComputerArgs";
import { Computer } from "../../../models/Computer";
export declare class CreateComputerResolver {
    createComputer(ctx: any, info: GraphQLResolveInfo, args: CreateComputerArgs): Promise<Computer>;
}
