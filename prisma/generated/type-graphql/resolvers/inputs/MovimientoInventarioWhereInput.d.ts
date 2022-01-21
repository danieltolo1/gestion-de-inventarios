import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_TipoMovimientoFilter } from "../inputs/EnumEnum_TipoMovimientoFilter";
import { IntFilter } from "../inputs/IntFilter";
import { InventarioRelationFilter } from "../inputs/InventarioRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";
export declare class MovimientoInventarioWhereInput {
    AND?: MovimientoInventarioWhereInput[] | undefined;
    OR?: MovimientoInventarioWhereInput[] | undefined;
    NOT?: MovimientoInventarioWhereInput[] | undefined;
    id?: StringFilter | undefined;
    inventario?: InventarioRelationFilter | undefined;
    inventarioId?: StringFilter | undefined;
    cantidad?: IntFilter | undefined;
    tipoMovimiento?: EnumEnum_TipoMovimientoFilter | undefined;
    fecha?: DateTimeFilter | undefined;
    usuario?: UsuarioRelationFilter | undefined;
    usuarioId?: StringNullableFilter | undefined;
}
