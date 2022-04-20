import { Account } from "../../../models/Account";
import { Maintenance } from "../../../models/Maintenance";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserMantenanceArgs } from "./args/UserMantenanceArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, args: UserSessionsArgs): Promise<Session[]>;
    mantenance(user: User, ctx: any, args: UserMantenanceArgs): Promise<Maintenance[]>;
}
