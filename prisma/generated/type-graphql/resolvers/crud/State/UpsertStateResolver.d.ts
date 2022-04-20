import { GraphQLResolveInfo } from "graphql";
import { UpsertStateArgs } from "./args/UpsertStateArgs";
import { State } from "../../../models/State";
export declare class UpsertStateResolver {
    upsertState(ctx: any, info: GraphQLResolveInfo, args: UpsertStateArgs): Promise<State>;
}
