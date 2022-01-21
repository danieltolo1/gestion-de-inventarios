import { UsuarioOrderByWithRelationInput } from "../../../inputs/UsuarioOrderByWithRelationInput";
import { UsuarioWhereInput } from "../../../inputs/UsuarioWhereInput";
import { UsuarioWhereUniqueInput } from "../../../inputs/UsuarioWhereUniqueInput";
export declare class AggregateUsuarioArgs {
    where?: UsuarioWhereInput | undefined;
    orderBy?: UsuarioOrderByWithRelationInput[] | undefined;
    cursor?: UsuarioWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
