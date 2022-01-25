import { Account } from "../../../models/Account";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserMovimientosArgs } from "./args/UserMovimientosArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, args: UserSessionsArgs): Promise<Session[]>;
    movimientos(user: User, ctx: any, args: UserMovimientosArgs): Promise<MovimientoInventario[]>;
}
