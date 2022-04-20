import { PartComputerAvgOrderByAggregateInput } from "../inputs/PartComputerAvgOrderByAggregateInput";
import { PartComputerCountOrderByAggregateInput } from "../inputs/PartComputerCountOrderByAggregateInput";
import { PartComputerMaxOrderByAggregateInput } from "../inputs/PartComputerMaxOrderByAggregateInput";
import { PartComputerMinOrderByAggregateInput } from "../inputs/PartComputerMinOrderByAggregateInput";
import { PartComputerSumOrderByAggregateInput } from "../inputs/PartComputerSumOrderByAggregateInput";
export declare class PartComputerOrderByWithAggregationInput {
    id_partComputer?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    computerId?: "asc" | "desc" | undefined;
    locationId?: "asc" | "desc" | undefined;
    maintenanceId?: "asc" | "desc" | undefined;
    name_part?: "asc" | "desc" | undefined;
    _count?: PartComputerCountOrderByAggregateInput | undefined;
    _avg?: PartComputerAvgOrderByAggregateInput | undefined;
    _max?: PartComputerMaxOrderByAggregateInput | undefined;
    _min?: PartComputerMinOrderByAggregateInput | undefined;
    _sum?: PartComputerSumOrderByAggregateInput | undefined;
}
