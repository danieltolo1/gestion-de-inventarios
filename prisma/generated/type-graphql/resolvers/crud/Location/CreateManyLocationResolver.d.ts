import { GraphQLResolveInfo } from "graphql";
import { CreateManyLocationArgs } from "./args/CreateManyLocationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLocationResolver {
    createManyLocation(ctx: any, info: GraphQLResolveInfo, args: CreateManyLocationArgs): Promise<AffectedRowsOutput>;
}
