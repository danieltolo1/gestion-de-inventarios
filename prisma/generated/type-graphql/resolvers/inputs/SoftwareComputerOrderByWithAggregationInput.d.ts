import { SoftwareComputerAvgOrderByAggregateInput } from "../inputs/SoftwareComputerAvgOrderByAggregateInput";
import { SoftwareComputerCountOrderByAggregateInput } from "../inputs/SoftwareComputerCountOrderByAggregateInput";
import { SoftwareComputerMaxOrderByAggregateInput } from "../inputs/SoftwareComputerMaxOrderByAggregateInput";
import { SoftwareComputerMinOrderByAggregateInput } from "../inputs/SoftwareComputerMinOrderByAggregateInput";
import { SoftwareComputerSumOrderByAggregateInput } from "../inputs/SoftwareComputerSumOrderByAggregateInput";
export declare class SoftwareComputerOrderByWithAggregationInput {
    id_softwarecomputer?: "asc" | "desc" | undefined;
    operatingsystem?: "asc" | "desc" | undefined;
    license_soA?: "asc" | "desc" | undefined;
    architecture?: "asc" | "desc" | undefined;
    _count?: SoftwareComputerCountOrderByAggregateInput | undefined;
    _avg?: SoftwareComputerAvgOrderByAggregateInput | undefined;
    _max?: SoftwareComputerMaxOrderByAggregateInput | undefined;
    _min?: SoftwareComputerMinOrderByAggregateInput | undefined;
    _sum?: SoftwareComputerSumOrderByAggregateInput | undefined;
}
