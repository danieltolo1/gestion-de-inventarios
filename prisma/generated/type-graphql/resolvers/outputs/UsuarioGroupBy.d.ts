import { UsuarioCountAggregate } from "../outputs/UsuarioCountAggregate";
import { UsuarioMaxAggregate } from "../outputs/UsuarioMaxAggregate";
import { UsuarioMinAggregate } from "../outputs/UsuarioMinAggregate";
export declare class UsuarioGroupBy {
    id: string;
    nombre: string;
    correo: string;
    _count: UsuarioCountAggregate | null;
    _min: UsuarioMinAggregate | null;
    _max: UsuarioMaxAggregate | null;
}
