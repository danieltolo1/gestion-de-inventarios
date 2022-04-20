import { MaintenanceAvgOrderByAggregateInput } from "../inputs/MaintenanceAvgOrderByAggregateInput";
import { MaintenanceCountOrderByAggregateInput } from "../inputs/MaintenanceCountOrderByAggregateInput";
import { MaintenanceMaxOrderByAggregateInput } from "../inputs/MaintenanceMaxOrderByAggregateInput";
import { MaintenanceMinOrderByAggregateInput } from "../inputs/MaintenanceMinOrderByAggregateInput";
import { MaintenanceSumOrderByAggregateInput } from "../inputs/MaintenanceSumOrderByAggregateInput";
export declare class MaintenanceOrderByWithAggregationInput {
    id_maintenance?: "asc" | "desc" | undefined;
    date_maintenance?: "asc" | "desc" | undefined;
    jworkerNameFirm?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: MaintenanceCountOrderByAggregateInput | undefined;
    _avg?: MaintenanceAvgOrderByAggregateInput | undefined;
    _max?: MaintenanceMaxOrderByAggregateInput | undefined;
    _min?: MaintenanceMinOrderByAggregateInput | undefined;
    _sum?: MaintenanceSumOrderByAggregateInput | undefined;
}
