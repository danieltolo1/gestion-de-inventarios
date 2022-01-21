import { UsuarioCountOrderByAggregateInput } from "../inputs/UsuarioCountOrderByAggregateInput";
import { UsuarioMaxOrderByAggregateInput } from "../inputs/UsuarioMaxOrderByAggregateInput";
import { UsuarioMinOrderByAggregateInput } from "../inputs/UsuarioMinOrderByAggregateInput";
export declare class UsuarioOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    correo?: "asc" | "desc" | undefined;
    _count?: UsuarioCountOrderByAggregateInput | undefined;
    _max?: UsuarioMaxOrderByAggregateInput | undefined;
    _min?: UsuarioMinOrderByAggregateInput | undefined;
}
