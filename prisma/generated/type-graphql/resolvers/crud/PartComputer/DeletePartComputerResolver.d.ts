import { GraphQLResolveInfo } from "graphql";
import { DeletePartComputerArgs } from "./args/DeletePartComputerArgs";
import { PartComputer } from "../../../models/PartComputer";
export declare class DeletePartComputerResolver {
    deletePartComputer(ctx: any, info: GraphQLResolveInfo, args: DeletePartComputerArgs): Promise<PartComputer | null>;
}
