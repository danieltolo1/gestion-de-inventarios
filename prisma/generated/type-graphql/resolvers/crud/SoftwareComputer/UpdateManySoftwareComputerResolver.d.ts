import { GraphQLResolveInfo } from "graphql";
import { UpdateManySoftwareComputerArgs } from "./args/UpdateManySoftwareComputerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySoftwareComputerResolver {
    updateManySoftwareComputer(ctx: any, info: GraphQLResolveInfo, args: UpdateManySoftwareComputerArgs): Promise<AffectedRowsOutput>;
}
