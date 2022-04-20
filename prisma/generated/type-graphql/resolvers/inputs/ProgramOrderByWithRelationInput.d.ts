import { SoftwareComputerOrderByWithRelationInput } from "../inputs/SoftwareComputerOrderByWithRelationInput";
export declare class ProgramOrderByWithRelationInput {
    id_program?: "asc" | "desc" | undefined;
    name_program?: "asc" | "desc" | undefined;
    version_program?: "asc" | "desc" | undefined;
    license_program?: "asc" | "desc" | undefined;
    softwarecomputer?: SoftwareComputerOrderByWithRelationInput | undefined;
    softwarecomputerId?: "asc" | "desc" | undefined;
}
