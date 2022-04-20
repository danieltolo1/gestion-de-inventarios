import { GraphQLResolveInfo } from "graphql";
import { UpdateComputerArgs } from "./args/UpdateComputerArgs";
import { Computer } from "../../../models/Computer";
export declare class UpdateComputerResolver {
    updateComputer(ctx: any, info: GraphQLResolveInfo, args: UpdateComputerArgs): Promise<Computer | null>;
}
