import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LocationScalarWhereWithAggregatesInput {
    AND?: LocationScalarWhereWithAggregatesInput[] | undefined;
    OR?: LocationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LocationScalarWhereWithAggregatesInput[] | undefined;
    id_location?: IntWithAggregatesFilter | undefined;
    internal_code?: IntWithAggregatesFilter | undefined;
    city?: StringWithAggregatesFilter | undefined;
    job_name?: StringWithAggregatesFilter | undefined;
}
