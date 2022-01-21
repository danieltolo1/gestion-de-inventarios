import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InventarioScalarWhereWithAggregatesInput {
    AND?: InventarioScalarWhereWithAggregatesInput[] | undefined;
    OR?: InventarioScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InventarioScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    cantidad?: IntWithAggregatesFilter | undefined;
    productoId?: StringWithAggregatesFilter | undefined;
}
