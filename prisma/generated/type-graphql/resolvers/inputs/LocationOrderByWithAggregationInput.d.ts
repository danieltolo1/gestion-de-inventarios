import { LocationAvgOrderByAggregateInput } from "../inputs/LocationAvgOrderByAggregateInput";
import { LocationCountOrderByAggregateInput } from "../inputs/LocationCountOrderByAggregateInput";
import { LocationMaxOrderByAggregateInput } from "../inputs/LocationMaxOrderByAggregateInput";
import { LocationMinOrderByAggregateInput } from "../inputs/LocationMinOrderByAggregateInput";
import { LocationSumOrderByAggregateInput } from "../inputs/LocationSumOrderByAggregateInput";
export declare class LocationOrderByWithAggregationInput {
    id_location?: "asc" | "desc" | undefined;
    internal_code?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    job_name?: "asc" | "desc" | undefined;
    _count?: LocationCountOrderByAggregateInput | undefined;
    _avg?: LocationAvgOrderByAggregateInput | undefined;
    _max?: LocationMaxOrderByAggregateInput | undefined;
    _min?: LocationMinOrderByAggregateInput | undefined;
    _sum?: LocationSumOrderByAggregateInput | undefined;
}
