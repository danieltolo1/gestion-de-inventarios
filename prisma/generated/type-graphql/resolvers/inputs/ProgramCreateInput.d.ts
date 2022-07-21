import { ComputerCreateNestedManyWithoutProgramInput } from "../inputs/ComputerCreateNestedManyWithoutProgramInput";
export declare class ProgramCreateInput {
    name_program: string;
    version_program?: string | undefined;
    license_program?: string | undefined;
    computer?: ComputerCreateNestedManyWithoutProgramInput | undefined;
}
