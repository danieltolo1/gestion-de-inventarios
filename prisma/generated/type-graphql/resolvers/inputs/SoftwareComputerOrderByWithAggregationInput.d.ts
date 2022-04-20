import { SoftwareComputerAvgOrderByAggregateInput } from "../inputs/SoftwareComputerAvgOrderByAggregateInput";
import { SoftwareComputerCountOrderByAggregateInput } from "../inputs/SoftwareComputerCountOrderByAggregateInput";
import { SoftwareComputerMaxOrderByAggregateInput } from "../inputs/SoftwareComputerMaxOrderByAggregateInput";
import { SoftwareComputerMinOrderByAggregateInput } from "../inputs/SoftwareComputerMinOrderByAggregateInput";
import { SoftwareComputerSumOrderByAggregateInput } from "../inputs/SoftwareComputerSumOrderByAggregateInput";
export declare class SoftwareComputerOrderByWithAggregationInput {
    id_softwarecomputer?: "asc" | "desc" | undefined;
    operatingsystem?: "asc" | "desc" | undefined;
    license_so?: "asc" | "desc" | undefined;
    user_anydesk?: "asc" | "desc" | undefined;
    pass_anydesk?: "asc" | "desc" | undefined;
    ip?: "asc" | "desc" | undefined;
    user_domain?: "asc" | "desc" | undefined;
    pass_domain?: "asc" | "desc" | undefined;
    user_admin?: "asc" | "desc" | undefined;
    pass_admin?: "asc" | "desc" | undefined;
    user_local?: "asc" | "desc" | undefined;
    pass_local?: "asc" | "desc" | undefined;
    architecture?: "asc" | "desc" | undefined;
    _count?: SoftwareComputerCountOrderByAggregateInput | undefined;
    _avg?: SoftwareComputerAvgOrderByAggregateInput | undefined;
    _max?: SoftwareComputerMaxOrderByAggregateInput | undefined;
    _min?: SoftwareComputerMinOrderByAggregateInput | undefined;
    _sum?: SoftwareComputerSumOrderByAggregateInput | undefined;
}
