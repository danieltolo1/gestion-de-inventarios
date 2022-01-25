import { Account } from "../models/Account";
import { MovimientoInventario } from "../models/MovimientoInventario";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    accounts?: Account[];
    sessions?: Session[];
    movimientos?: MovimientoInventario[];
    _count?: UserCount | null;
}
