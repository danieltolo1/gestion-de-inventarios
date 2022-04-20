import { SoftwareComputer } from "../models/SoftwareComputer";
export declare class Program {
    id_program: number;
    name_program: string;
    version_program?: string | null;
    license_program?: string | null;
    softwarecomputer?: SoftwareComputer;
    softwarecomputerId: number;
}
