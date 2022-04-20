import { GraphQLResolveInfo } from "graphql";
import { CreateManyPartComputerArgs } from "./args/CreateManyPartComputerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPartComputerResolver {
    createManyPartComputer(ctx: any, info: GraphQLResolveInfo, args: CreateManyPartComputerArgs): Promise<AffectedRowsOutput>;
}
