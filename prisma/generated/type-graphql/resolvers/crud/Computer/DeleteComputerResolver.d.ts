import { GraphQLResolveInfo } from "graphql";
import { DeleteComputerArgs } from "./args/DeleteComputerArgs";
import { Computer } from "../../../models/Computer";
export declare class DeleteComputerResolver {
    deleteComputer(ctx: any, info: GraphQLResolveInfo, args: DeleteComputerArgs): Promise<Computer | null>;
}
