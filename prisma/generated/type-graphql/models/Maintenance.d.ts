import { PartComputer } from "../models/PartComputer";
import { User } from "../models/User";
import { MaintenanceCount } from "../resolvers/outputs/MaintenanceCount";
export declare class Maintenance {
    id_maintenance: number;
    date_maintenance?: Date | null;
    jworkerNameFirm?: string | null;
    user?: User;
    userId: string;
    partComputer?: PartComputer[];
    _count?: MaintenanceCount | null;
}
