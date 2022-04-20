import { NestedEnumEnum_OperatigsystemFilter } from "../inputs/NestedEnumEnum_OperatigsystemFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumEnum_OperatigsystemWithAggregatesFilter {
    equals?: "Windows_7" | "Windows_8" | "Windows_10" | "Windows_11" | undefined;
    in?: Array<"Windows_7" | "Windows_8" | "Windows_10" | "Windows_11"> | undefined;
    notIn?: Array<"Windows_7" | "Windows_8" | "Windows_10" | "Windows_11"> | undefined;
    not?: NestedEnumEnum_OperatigsystemWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_OperatigsystemFilter | undefined;
    _max?: NestedEnumEnum_OperatigsystemFilter | undefined;
}
