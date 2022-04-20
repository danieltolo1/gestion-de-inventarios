import { Computer } from "../models/Computer";
import { Program } from "../models/Program";
import { SoftwareComputerCount } from "../resolvers/outputs/SoftwareComputerCount";
export declare class SoftwareComputer {
    id_softwarecomputer: number;
    computer?: Computer[];
    operatingsystem: "Windows_7" | "Windows_8" | "Windows_10" | "Windows_11";
    license_so: string;
    user_anydesk?: string | null;
    pass_anydesk?: string | null;
    ip: string;
    user_domain?: string | null;
    pass_domain?: string | null;
    user_admin?: string | null;
    pass_admin?: string | null;
    user_local?: string | null;
    pass_local?: string | null;
    architecture: "bits_32" | "bits_64";
    program?: Program[];
    _count?: SoftwareComputerCount | null;
}
