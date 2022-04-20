export declare class ComputerCreateManyStateInput {
    id_computer?: number | undefined;
    buy_date?: Date | undefined;
    price?: number | undefined;
    internal_code: string;
    serial_number: string;
    memory: string;
    hard_disk: string;
    processor: string;
    optical_unit?: boolean | undefined;
    model: string;
    softwarecomputerId: number;
    observation?: string | undefined;
    historial?: string | undefined;
}
