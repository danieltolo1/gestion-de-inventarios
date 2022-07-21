import { ComputerCreateNestedManyWithoutSoftwarecomputerInput } from "../inputs/ComputerCreateNestedManyWithoutSoftwarecomputerInput";
export declare class SoftwareComputerCreateInput {
    computer?: ComputerCreateNestedManyWithoutSoftwarecomputerInput | undefined;
    operatingsystem: "Windows_7" | "Windows_8" | "Windows_10" | "Windows_11";
    license_soA: string;
    architecture: "bits_32" | "bits_64";
}
