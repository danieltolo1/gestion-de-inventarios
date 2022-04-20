import { ProgramCreateInput } from "../../../inputs/ProgramCreateInput";
import { ProgramUpdateInput } from "../../../inputs/ProgramUpdateInput";
import { ProgramWhereUniqueInput } from "../../../inputs/ProgramWhereUniqueInput";
export declare class UpsertProgramArgs {
    where: ProgramWhereUniqueInput;
    create: ProgramCreateInput;
    update: ProgramUpdateInput;
}
