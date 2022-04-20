import { GraphQLResolveInfo } from "graphql";
import { CreateManyComputerArgs } from "./args/CreateManyComputerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyComputerResolver {
    createManyComputer(ctx: any, info: GraphQLResolveInfo, args: CreateManyComputerArgs): Promise<AffectedRowsOutput>;
}
