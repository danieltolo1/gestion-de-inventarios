import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProgramScalarWhereWithAggregatesInput {
    AND?: ProgramScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProgramScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProgramScalarWhereWithAggregatesInput[] | undefined;
    id_program?: IntWithAggregatesFilter | undefined;
    name_program?: StringWithAggregatesFilter | undefined;
    version_program?: StringNullableWithAggregatesFilter | undefined;
    license_program?: StringNullableWithAggregatesFilter | undefined;
    softwarecomputerId?: IntWithAggregatesFilter | undefined;
}
