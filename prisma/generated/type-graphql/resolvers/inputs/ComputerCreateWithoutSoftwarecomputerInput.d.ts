import { PartComputerCreateNestedManyWithoutComputerInput } from "../inputs/PartComputerCreateNestedManyWithoutComputerInput";
import { StateCreateNestedOneWithoutComputerInput } from "../inputs/StateCreateNestedOneWithoutComputerInput";
export declare class ComputerCreateWithoutSoftwarecomputerInput {
    buy_date?: Date | undefined;
    price?: number | undefined;
    internal_code: string;
    serial_number: string;
    memory: string;
    hard_disk: string;
    processor: string;
    optical_unit?: boolean | undefined;
    model: string;
    state: StateCreateNestedOneWithoutComputerInput;
    partComputer?: PartComputerCreateNestedManyWithoutComputerInput | undefined;
    observation?: string | undefined;
    historial?: string | undefined;
}
