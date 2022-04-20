import { GraphQLResolveInfo } from "graphql";
import { FindManyComputerArgs } from "./args/FindManyComputerArgs";
import { Computer } from "../../../models/Computer";
export declare class FindManyComputerResolver {
    computers(ctx: any, info: GraphQLResolveInfo, args: FindManyComputerArgs): Promise<Computer[]>;
}
