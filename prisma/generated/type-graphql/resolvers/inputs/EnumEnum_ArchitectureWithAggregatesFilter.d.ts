import { NestedEnumEnum_ArchitectureFilter } from "../inputs/NestedEnumEnum_ArchitectureFilter";
import { NestedEnumEnum_ArchitectureWithAggregatesFilter } from "../inputs/NestedEnumEnum_ArchitectureWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_ArchitectureWithAggregatesFilter {
    equals?: "bits_32" | "bits_64" | undefined;
    in?: Array<"bits_32" | "bits_64"> | undefined;
    notIn?: Array<"bits_32" | "bits_64"> | undefined;
    not?: NestedEnumEnum_ArchitectureWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_ArchitectureFilter | undefined;
    _max?: NestedEnumEnum_ArchitectureFilter | undefined;
}
