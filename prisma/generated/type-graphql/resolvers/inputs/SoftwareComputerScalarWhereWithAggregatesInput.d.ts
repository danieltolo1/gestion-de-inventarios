import { EnumEnum_ArchitectureWithAggregatesFilter } from "../inputs/EnumEnum_ArchitectureWithAggregatesFilter";
import { EnumEnum_OperatigsystemWithAggregatesFilter } from "../inputs/EnumEnum_OperatigsystemWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SoftwareComputerScalarWhereWithAggregatesInput {
    AND?: SoftwareComputerScalarWhereWithAggregatesInput[] | undefined;
    OR?: SoftwareComputerScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SoftwareComputerScalarWhereWithAggregatesInput[] | undefined;
    id_softwarecomputer?: IntWithAggregatesFilter | undefined;
    operatingsystem?: EnumEnum_OperatigsystemWithAggregatesFilter | undefined;
    license_so?: StringWithAggregatesFilter | undefined;
    user_anydesk?: StringNullableWithAggregatesFilter | undefined;
    pass_anydesk?: StringNullableWithAggregatesFilter | undefined;
    ip?: StringWithAggregatesFilter | undefined;
    user_domain?: StringNullableWithAggregatesFilter | undefined;
    pass_domain?: StringNullableWithAggregatesFilter | undefined;
    user_admin?: StringNullableWithAggregatesFilter | undefined;
    pass_admin?: StringNullableWithAggregatesFilter | undefined;
    user_local?: StringNullableWithAggregatesFilter | undefined;
    pass_local?: StringNullableWithAggregatesFilter | undefined;
    architecture?: EnumEnum_ArchitectureWithAggregatesFilter | undefined;
}
