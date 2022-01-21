export declare class MovimientoInventarioCreateManyUsuarioInput {
    id?: string | undefined;
    inventarioId: string;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
}
