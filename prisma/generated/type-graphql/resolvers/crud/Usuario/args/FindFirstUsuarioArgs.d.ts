import { UsuarioOrderByWithRelationInput } from "../../../inputs/UsuarioOrderByWithRelationInput";
import { UsuarioWhereInput } from "../../../inputs/UsuarioWhereInput";
import { UsuarioWhereUniqueInput } from "../../../inputs/UsuarioWhereUniqueInput";
export declare class FindFirstUsuarioArgs {
    where?: UsuarioWhereInput | undefined;
    orderBy?: UsuarioOrderByWithRelationInput[] | undefined;
    cursor?: UsuarioWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "nombre" | "correo"> | undefined;
}
