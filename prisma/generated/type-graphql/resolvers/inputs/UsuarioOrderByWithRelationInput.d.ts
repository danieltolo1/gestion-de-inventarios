import { MovimientoInventarioOrderByRelationAggregateInput } from "../inputs/MovimientoInventarioOrderByRelationAggregateInput";
export declare class UsuarioOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    correo?: "asc" | "desc" | undefined;
    movimientos?: MovimientoInventarioOrderByRelationAggregateInput | undefined;
}
