import { GraphQLResolveInfo } from "graphql";
import { DeleteManyComputerArgs } from "./args/DeleteManyComputerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyComputerResolver {
    deleteManyComputer(ctx: any, info: GraphQLResolveInfo, args: DeleteManyComputerArgs): Promise<AffectedRowsOutput>;
}
