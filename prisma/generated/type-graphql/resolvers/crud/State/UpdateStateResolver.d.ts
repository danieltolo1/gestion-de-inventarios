import { GraphQLResolveInfo } from "graphql";
import { UpdateStateArgs } from "./args/UpdateStateArgs";
import { State } from "../../../models/State";
export declare class UpdateStateResolver {
    updateState(ctx: any, info: GraphQLResolveInfo, args: UpdateStateArgs): Promise<State | null>;
}
