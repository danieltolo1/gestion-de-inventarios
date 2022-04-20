import { GraphQLResolveInfo } from "graphql";
import { UpsertComputerArgs } from "./args/UpsertComputerArgs";
import { Computer } from "../../../models/Computer";
export declare class UpsertComputerResolver {
    upsertComputer(ctx: any, info: GraphQLResolveInfo, args: UpsertComputerArgs): Promise<Computer>;
}
