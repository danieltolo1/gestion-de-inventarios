import { GraphQLResolveInfo } from "graphql";
import { DeleteManySoftwareComputerArgs } from "./args/DeleteManySoftwareComputerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySoftwareComputerResolver {
    deleteManySoftwareComputer(ctx: any, info: GraphQLResolveInfo, args: DeleteManySoftwareComputerArgs): Promise<AffectedRowsOutput>;
}
