import { GraphQLResolveInfo } from "graphql";
import { FindFirstStateArgs } from "./args/FindFirstStateArgs";
import { State } from "../../../models/State";
export declare class FindFirstStateResolver {
    findFirstState(ctx: any, info: GraphQLResolveInfo, args: FindFirstStateArgs): Promise<State | null>;
}
