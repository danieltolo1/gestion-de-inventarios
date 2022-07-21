import { Computer } from "../models/Computer";
import { SoftwareComputerCount } from "../resolvers/outputs/SoftwareComputerCount";
export declare class SoftwareComputer {
    id_softwarecomputer: number;
    computer?: Computer[];
    operatingsystem: "Windows_7" | "Windows_8" | "Windows_10" | "Windows_11";
    license_soA: string;
    architecture: "bits_32" | "bits_64";
    _count?: SoftwareComputerCount | null;
}
