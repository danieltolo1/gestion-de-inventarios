import { ProgramOrderByWithRelationInput } from "../../../inputs/ProgramOrderByWithRelationInput";
import { ProgramWhereInput } from "../../../inputs/ProgramWhereInput";
import { ProgramWhereUniqueInput } from "../../../inputs/ProgramWhereUniqueInput";
export declare class FindManyProgramArgs {
    where?: ProgramWhereInput | undefined;
    orderBy?: ProgramOrderByWithRelationInput[] | undefined;
    cursor?: ProgramWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_program" | "name_program" | "version_program" | "license_program" | "softwarecomputerId"> | undefined;
}
