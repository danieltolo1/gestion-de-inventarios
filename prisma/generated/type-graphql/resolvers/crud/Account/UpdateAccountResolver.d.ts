import { GraphQLResolveInfo } from "graphql";
import { UpdateAccountArgs } from "./args/UpdateAccountArgs";
import { Account } from "../../../models/Account";
export declare class UpdateAccountResolver {
    updateAccount(ctx: any, info: GraphQLResolveInfo, args: UpdateAccountArgs): Promise<Account | null>;
}
