import { MovimientoInventarioListRelationFilter } from "../inputs/MovimientoInventarioListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UsuarioWhereInput {
    AND?: UsuarioWhereInput[] | undefined;
    OR?: UsuarioWhereInput[] | undefined;
    NOT?: UsuarioWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    correo?: StringFilter | undefined;
    movimientos?: MovimientoInventarioListRelationFilter | undefined;
}
