import { GraphQLResolveInfo } from "graphql";
import { UpdateManyComputerArgs } from "./args/UpdateManyComputerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyComputerResolver {
    updateManyComputer(ctx: any, info: GraphQLResolveInfo, args: UpdateManyComputerArgs): Promise<AffectedRowsOutput>;
}
