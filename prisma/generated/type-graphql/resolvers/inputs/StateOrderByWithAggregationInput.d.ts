import { StateAvgOrderByAggregateInput } from "../inputs/StateAvgOrderByAggregateInput";
import { StateCountOrderByAggregateInput } from "../inputs/StateCountOrderByAggregateInput";
import { StateMaxOrderByAggregateInput } from "../inputs/StateMaxOrderByAggregateInput";
import { StateMinOrderByAggregateInput } from "../inputs/StateMinOrderByAggregateInput";
import { StateSumOrderByAggregateInput } from "../inputs/StateSumOrderByAggregateInput";
export declare class StateOrderByWithAggregationInput {
    id_state?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    _count?: StateCountOrderByAggregateInput | undefined;
    _avg?: StateAvgOrderByAggregateInput | undefined;
    _max?: StateMaxOrderByAggregateInput | undefined;
    _min?: StateMinOrderByAggregateInput | undefined;
    _sum?: StateSumOrderByAggregateInput | undefined;
}
