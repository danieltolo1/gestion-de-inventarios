import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStateArgs } from "./args/FindUniqueStateArgs";
import { State } from "../../../models/State";
export declare class FindUniqueStateResolver {
    state(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStateArgs): Promise<State | null>;
}
