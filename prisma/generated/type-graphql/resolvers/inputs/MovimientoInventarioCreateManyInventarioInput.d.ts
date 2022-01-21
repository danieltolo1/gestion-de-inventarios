export declare class MovimientoInventarioCreateManyInventarioInput {
    id?: string | undefined;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
    usuarioId?: string | undefined;
}
