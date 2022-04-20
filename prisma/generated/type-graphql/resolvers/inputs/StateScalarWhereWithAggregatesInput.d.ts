import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class StateScalarWhereWithAggregatesInput {
    AND?: StateScalarWhereWithAggregatesInput[] | undefined;
    OR?: StateScalarWhereWithAggregatesInput[] | undefined;
    NOT?: StateScalarWhereWithAggregatesInput[] | undefined;
    id_state?: IntWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
}
