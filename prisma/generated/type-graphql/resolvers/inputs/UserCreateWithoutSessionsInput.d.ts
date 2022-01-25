import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { MovimientoInventarioCreateNestedManyWithoutUsuarioInput } from "../inputs/MovimientoInventarioCreateNestedManyWithoutUsuarioInput";
export declare class UserCreateWithoutSessionsInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    movimientos?: MovimientoInventarioCreateNestedManyWithoutUsuarioInput | undefined;
}
