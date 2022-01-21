import { NestedEnumEnum_TipoMovimientoFilter } from "../inputs/NestedEnumEnum_TipoMovimientoFilter";
import { NestedEnumEnum_TipoMovimientoWithAggregatesFilter } from "../inputs/NestedEnumEnum_TipoMovimientoWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_TipoMovimientoWithAggregatesFilter {
    equals?: "Entrada" | "Salida" | undefined;
    in?: Array<"Entrada" | "Salida"> | undefined;
    notIn?: Array<"Entrada" | "Salida"> | undefined;
    not?: NestedEnumEnum_TipoMovimientoWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_TipoMovimientoFilter | undefined;
    _max?: NestedEnumEnum_TipoMovimientoFilter | undefined;
}
