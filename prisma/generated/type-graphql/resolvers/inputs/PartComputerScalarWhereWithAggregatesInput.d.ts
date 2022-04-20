import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class PartComputerScalarWhereWithAggregatesInput {
    AND?: PartComputerScalarWhereWithAggregatesInput[] | undefined;
    OR?: PartComputerScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PartComputerScalarWhereWithAggregatesInput[] | undefined;
    id_partComputer?: IntWithAggregatesFilter | undefined;
    productId?: IntWithAggregatesFilter | undefined;
    computerId?: IntWithAggregatesFilter | undefined;
    locationId?: IntWithAggregatesFilter | undefined;
    maintenanceId?: IntWithAggregatesFilter | undefined;
    name_part?: StringNullableWithAggregatesFilter | undefined;
}
