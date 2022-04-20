import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPartComputerArgs } from "./args/DeleteManyPartComputerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPartComputerResolver {
    deleteManyPartComputer(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPartComputerArgs): Promise<AffectedRowsOutput>;
}
