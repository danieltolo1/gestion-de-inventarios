import { GraphQLResolveInfo } from "graphql";
import { FindFirstPartComputerArgs } from "./args/FindFirstPartComputerArgs";
import { PartComputer } from "../../../models/PartComputer";
export declare class FindFirstPartComputerResolver {
    findFirstPartComputer(ctx: any, info: GraphQLResolveInfo, args: FindFirstPartComputerArgs): Promise<PartComputer | null>;
}
