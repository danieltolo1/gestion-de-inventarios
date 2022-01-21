import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_TipoMovimientoFilter } from "../inputs/EnumEnum_TipoMovimientoFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class MovimientoInventarioScalarWhereInput {
    AND?: MovimientoInventarioScalarWhereInput[] | undefined;
    OR?: MovimientoInventarioScalarWhereInput[] | undefined;
    NOT?: MovimientoInventarioScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    inventarioId?: StringFilter | undefined;
    cantidad?: IntFilter | undefined;
    tipoMovimiento?: EnumEnum_TipoMovimientoFilter | undefined;
    fecha?: DateTimeFilter | undefined;
    usuarioId?: StringNullableFilter | undefined;
}
