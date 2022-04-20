import { SoftwareComputerCreateNestedOneWithoutProgramInput } from "../inputs/SoftwareComputerCreateNestedOneWithoutProgramInput";
export declare class ProgramCreateInput {
    name_program: string;
    version_program?: string | undefined;
    license_program?: string | undefined;
    softwarecomputer: SoftwareComputerCreateNestedOneWithoutProgramInput;
}
