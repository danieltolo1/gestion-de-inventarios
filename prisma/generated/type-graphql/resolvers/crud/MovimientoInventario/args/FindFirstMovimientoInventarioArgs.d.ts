import { MovimientoInventarioOrderByWithRelationInput } from "../../../inputs/MovimientoInventarioOrderByWithRelationInput";
import { MovimientoInventarioWhereInput } from "../../../inputs/MovimientoInventarioWhereInput";
import { MovimientoInventarioWhereUniqueInput } from "../../../inputs/MovimientoInventarioWhereUniqueInput";
export declare class FindFirstMovimientoInventarioArgs {
    where?: MovimientoInventarioWhereInput | undefined;
    orderBy?: MovimientoInventarioOrderByWithRelationInput[] | undefined;
    cursor?: MovimientoInventarioWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "inventarioId" | "cantidad" | "tipoMovimiento" | "fecha" | "usuarioId"> | undefined;
}
