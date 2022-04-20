import { GraphQLResolveInfo } from "graphql";
import { FindUniquePartComputerArgs } from "./args/FindUniquePartComputerArgs";
import { PartComputer } from "../../../models/PartComputer";
export declare class FindUniquePartComputerResolver {
    partComputer(ctx: any, info: GraphQLResolveInfo, args: FindUniquePartComputerArgs): Promise<PartComputer | null>;
}
