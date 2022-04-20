import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPartComputerArgs } from "./args/UpdateManyPartComputerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPartComputerResolver {
    updateManyPartComputer(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPartComputerArgs): Promise<AffectedRowsOutput>;
}
