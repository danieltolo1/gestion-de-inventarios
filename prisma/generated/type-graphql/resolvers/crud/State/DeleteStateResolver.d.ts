import { GraphQLResolveInfo } from "graphql";
import { DeleteStateArgs } from "./args/DeleteStateArgs";
import { State } from "../../../models/State";
export declare class DeleteStateResolver {
    deleteState(ctx: any, info: GraphQLResolveInfo, args: DeleteStateArgs): Promise<State | null>;
}
