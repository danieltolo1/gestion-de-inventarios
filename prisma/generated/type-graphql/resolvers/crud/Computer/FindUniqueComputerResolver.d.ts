import { GraphQLResolveInfo } from "graphql";
import { FindUniqueComputerArgs } from "./args/FindUniqueComputerArgs";
import { Computer } from "../../../models/Computer";
export declare class FindUniqueComputerResolver {
    computer(ctx: any, info: GraphQLResolveInfo, args: FindUniqueComputerArgs): Promise<Computer | null>;
}
