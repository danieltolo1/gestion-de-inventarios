import { GraphQLResolveInfo } from "graphql";
import { CreateManyInventarioArgs } from "./args/CreateManyInventarioArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInventarioResolver {
    createManyInventario(ctx: any, info: GraphQLResolveInfo, args: CreateManyInventarioArgs): Promise<AffectedRowsOutput>;
}
