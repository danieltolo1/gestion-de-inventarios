import { GraphQLResolveInfo } from "graphql";
import { FindManyStateArgs } from "./args/FindManyStateArgs";
import { State } from "../../../models/State";
export declare class FindManyStateResolver {
    states(ctx: any, info: GraphQLResolveInfo, args: FindManyStateArgs): Promise<State[]>;
}
