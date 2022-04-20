import { GraphQLResolveInfo } from "graphql";
import { UpdatePartComputerArgs } from "./args/UpdatePartComputerArgs";
import { PartComputer } from "../../../models/PartComputer";
export declare class UpdatePartComputerResolver {
    updatePartComputer(ctx: any, info: GraphQLResolveInfo, args: UpdatePartComputerArgs): Promise<PartComputer | null>;
}
