import { ComputerAvgOrderByAggregateInput } from "../inputs/ComputerAvgOrderByAggregateInput";
import { ComputerCountOrderByAggregateInput } from "../inputs/ComputerCountOrderByAggregateInput";
import { ComputerMaxOrderByAggregateInput } from "../inputs/ComputerMaxOrderByAggregateInput";
import { ComputerMinOrderByAggregateInput } from "../inputs/ComputerMinOrderByAggregateInput";
import { ComputerSumOrderByAggregateInput } from "../inputs/ComputerSumOrderByAggregateInput";
export declare class ComputerOrderByWithAggregationInput {
    id_computer?: "asc" | "desc" | undefined;
    buy_date?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    internal_code?: "asc" | "desc" | undefined;
    serial_number?: "asc" | "desc" | undefined;
    memory?: "asc" | "desc" | undefined;
    hard_disk?: "asc" | "desc" | undefined;
    processor?: "asc" | "desc" | undefined;
    optical_unit?: "asc" | "desc" | undefined;
    model?: "asc" | "desc" | undefined;
    stateId?: "asc" | "desc" | undefined;
    softwarecomputerId?: "asc" | "desc" | undefined;
    observation?: "asc" | "desc" | undefined;
    historial?: "asc" | "desc" | undefined;
    _count?: ComputerCountOrderByAggregateInput | undefined;
    _avg?: ComputerAvgOrderByAggregateInput | undefined;
    _max?: ComputerMaxOrderByAggregateInput | undefined;
    _min?: ComputerMinOrderByAggregateInput | undefined;
    _sum?: ComputerSumOrderByAggregateInput | undefined;
}
