import { ComputerListRelationFilter } from "../inputs/ComputerListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProgramWhereInput {
    AND?: ProgramWhereInput[] | undefined;
    OR?: ProgramWhereInput[] | undefined;
    NOT?: ProgramWhereInput[] | undefined;
    id_program?: IntFilter | undefined;
    name_program?: StringFilter | undefined;
    version_program?: StringNullableFilter | undefined;
    license_program?: StringNullableFilter | undefined;
    computer?: ComputerListRelationFilter | undefined;
}
