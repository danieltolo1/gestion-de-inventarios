import { ProgramOrderByWithAggregationInput } from "../../../inputs/ProgramOrderByWithAggregationInput";
import { ProgramScalarWhereWithAggregatesInput } from "../../../inputs/ProgramScalarWhereWithAggregatesInput";
import { ProgramWhereInput } from "../../../inputs/ProgramWhereInput";
export declare class GroupByProgramArgs {
    where?: ProgramWhereInput | undefined;
    orderBy?: ProgramOrderByWithAggregationInput[] | undefined;
    by: Array<"id_program" | "name_program" | "version_program" | "license_program" | "softwarecomputerId">;
    having?: ProgramScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
