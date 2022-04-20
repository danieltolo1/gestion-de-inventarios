import { NestedEnumEnum_OperatigsystemFilter } from "../inputs/NestedEnumEnum_OperatigsystemFilter";
import { NestedEnumEnum_OperatigsystemWithAggregatesFilter } from "../inputs/NestedEnumEnum_OperatigsystemWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_OperatigsystemWithAggregatesFilter {
    equals?: "Windows_7" | "Windows_8" | "Windows_10" | "Windows_11" | undefined;
    in?: Array<"Windows_7" | "Windows_8" | "Windows_10" | "Windows_11"> | undefined;
    notIn?: Array<"Windows_7" | "Windows_8" | "Windows_10" | "Windows_11"> | undefined;
    not?: NestedEnumEnum_OperatigsystemWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_OperatigsystemFilter | undefined;
    _max?: NestedEnumEnum_OperatigsystemFilter | undefined;
}
