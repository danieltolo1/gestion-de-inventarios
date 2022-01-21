export declare class MovimientoInventarioCreateManyInput {
    id?: string | undefined;
    inventarioId: string;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
    usuarioId?: string | undefined;
}
