import { Computer } from "../models/Computer";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { MaintenanceCount } from "../resolvers/outputs/MaintenanceCount";
export declare class Maintenance {
    id_maintenance: number;
    date_maintenance?: Date | null;
    jworkerNameFirm?: string | null;
    user?: User;
    userId: string;
    computer?: Computer;
    computerId: number;
    product?: Product[];
    observation?: string | null;
    _count?: MaintenanceCount | null;
}
