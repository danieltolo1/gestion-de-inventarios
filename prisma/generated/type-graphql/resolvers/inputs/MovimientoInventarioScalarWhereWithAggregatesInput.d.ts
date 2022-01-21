import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_TipoMovimientoWithAggregatesFilter } from "../inputs/EnumEnum_TipoMovimientoWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MovimientoInventarioScalarWhereWithAggregatesInput {
    AND?: MovimientoInventarioScalarWhereWithAggregatesInput[] | undefined;
    OR?: MovimientoInventarioScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MovimientoInventarioScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    inventarioId?: StringWithAggregatesFilter | undefined;
    cantidad?: IntWithAggregatesFilter | undefined;
    tipoMovimiento?: EnumEnum_TipoMovimientoWithAggregatesFilter | undefined;
    fecha?: DateTimeWithAggregatesFilter | undefined;
    usuarioId?: StringNullableWithAggregatesFilter | undefined;
}
