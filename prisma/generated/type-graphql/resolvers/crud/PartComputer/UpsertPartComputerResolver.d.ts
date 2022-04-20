import { GraphQLResolveInfo } from "graphql";
import { UpsertPartComputerArgs } from "./args/UpsertPartComputerArgs";
import { PartComputer } from "../../../models/PartComputer";
export declare class UpsertPartComputerResolver {
    upsertPartComputer(ctx: any, info: GraphQLResolveInfo, args: UpsertPartComputerArgs): Promise<PartComputer>;
}
