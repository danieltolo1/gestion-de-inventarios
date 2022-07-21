import { ProgramAvgOrderByAggregateInput } from "../inputs/ProgramAvgOrderByAggregateInput";
import { ProgramCountOrderByAggregateInput } from "../inputs/ProgramCountOrderByAggregateInput";
import { ProgramMaxOrderByAggregateInput } from "../inputs/ProgramMaxOrderByAggregateInput";
import { ProgramMinOrderByAggregateInput } from "../inputs/ProgramMinOrderByAggregateInput";
import { ProgramSumOrderByAggregateInput } from "../inputs/ProgramSumOrderByAggregateInput";
export declare class ProgramOrderByWithAggregationInput {
    id_program?: "asc" | "desc" | undefined;
    name_program?: "asc" | "desc" | undefined;
    version_program?: "asc" | "desc" | undefined;
    license_program?: "asc" | "desc" | undefined;
    _count?: ProgramCountOrderByAggregateInput | undefined;
    _avg?: ProgramAvgOrderByAggregateInput | undefined;
    _max?: ProgramMaxOrderByAggregateInput | undefined;
    _min?: ProgramMinOrderByAggregateInput | undefined;
    _sum?: ProgramSumOrderByAggregateInput | undefined;
}
