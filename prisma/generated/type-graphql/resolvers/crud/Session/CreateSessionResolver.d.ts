import { GraphQLResolveInfo } from "graphql";
import { CreateSessionArgs } from "./args/CreateSessionArgs";
import { Session } from "../../../models/Session";
export declare class CreateSessionResolver {
    createSession(ctx: any, info: GraphQLResolveInfo, args: CreateSessionArgs): Promise<Session>;
}
