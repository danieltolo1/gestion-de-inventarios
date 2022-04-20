import { GraphQLResolveInfo } from "graphql";
import { FindFirstComputerArgs } from "./args/FindFirstComputerArgs";
import { Computer } from "../../../models/Computer";
export declare class FindFirstComputerResolver {
    findFirstComputer(ctx: any, info: GraphQLResolveInfo, args: FindFirstComputerArgs): Promise<Computer | null>;
}
