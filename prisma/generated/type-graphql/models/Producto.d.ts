import { Inventario } from "../models/Inventario";
export declare class Producto {
    id: string;
    nombre: string;
    foto: string;
    inventario?: Inventario | null;
}
