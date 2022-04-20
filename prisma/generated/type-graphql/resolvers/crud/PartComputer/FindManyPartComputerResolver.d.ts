import { GraphQLResolveInfo } from "graphql";
import { FindManyPartComputerArgs } from "./args/FindManyPartComputerArgs";
import { PartComputer } from "../../../models/PartComputer";
export declare class FindManyPartComputerResolver {
    partComputers(ctx: any, info: GraphQLResolveInfo, args: FindManyPartComputerArgs): Promise<PartComputer[]>;
}
