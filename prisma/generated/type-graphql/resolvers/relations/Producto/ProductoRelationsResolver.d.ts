import { Inventario } from "../../../models/Inventario";
import { Producto } from "../../../models/Producto";
export declare class ProductoRelationsResolver {
    inventario(producto: Producto, ctx: any): Promise<Inventario | null>;
}
