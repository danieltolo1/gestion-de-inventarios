import { ProgramOrderByWithRelationInput } from "../../../inputs/ProgramOrderByWithRelationInput";
import { ProgramWhereInput } from "../../../inputs/ProgramWhereInput";
import { ProgramWhereUniqueInput } from "../../../inputs/ProgramWhereUniqueInput";
export declare class AggregateProgramArgs {
    where?: ProgramWhereInput | undefined;
    orderBy?: ProgramOrderByWithRelationInput[] | undefined;
    cursor?: ProgramWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
