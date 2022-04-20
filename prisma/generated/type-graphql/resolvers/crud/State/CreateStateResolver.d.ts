import { GraphQLResolveInfo } from "graphql";
import { CreateStateArgs } from "./args/CreateStateArgs";
import { State } from "../../../models/State";
export declare class CreateStateResolver {
    createState(ctx: any, info: GraphQLResolveInfo, args: CreateStateArgs): Promise<State>;
}
