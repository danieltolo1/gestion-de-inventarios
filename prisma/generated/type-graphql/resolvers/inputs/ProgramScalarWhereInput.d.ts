import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProgramScalarWhereInput {
    AND?: ProgramScalarWhereInput[] | undefined;
    OR?: ProgramScalarWhereInput[] | undefined;
    NOT?: ProgramScalarWhereInput[] | undefined;
    id_program?: IntFilter | undefined;
    name_program?: StringFilter | undefined;
    version_program?: StringNullableFilter | undefined;
    license_program?: StringNullableFilter | undefined;
    softwarecomputerId?: IntFilter | undefined;
}
