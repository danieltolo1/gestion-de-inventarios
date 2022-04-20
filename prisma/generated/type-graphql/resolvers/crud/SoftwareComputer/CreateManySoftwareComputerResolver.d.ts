import { GraphQLResolveInfo } from "graphql";
import { CreateManySoftwareComputerArgs } from "./args/CreateManySoftwareComputerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySoftwareComputerResolver {
    createManySoftwareComputer(ctx: any, info: GraphQLResolveInfo, args: CreateManySoftwareComputerArgs): Promise<AffectedRowsOutput>;
}
