import { EnumEnum_ArchitectureWithAggregatesFilter } from "../inputs/EnumEnum_ArchitectureWithAggregatesFilter";
import { EnumEnum_OperatigsystemWithAggregatesFilter } from "../inputs/EnumEnum_OperatigsystemWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SoftwareComputerScalarWhereWithAggregatesInput {
    AND?: SoftwareComputerScalarWhereWithAggregatesInput[] | undefined;
    OR?: SoftwareComputerScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SoftwareComputerScalarWhereWithAggregatesInput[] | undefined;
    id_softwarecomputer?: IntWithAggregatesFilter | undefined;
    operatingsystem?: EnumEnum_OperatigsystemWithAggregatesFilter | undefined;
    license_soA?: StringWithAggregatesFilter | undefined;
    architecture?: EnumEnum_ArchitectureWithAggregatesFilter | undefined;
}
