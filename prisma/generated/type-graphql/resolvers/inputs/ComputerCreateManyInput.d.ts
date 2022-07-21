export declare class ComputerCreateManyInput {
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
    stateId: number;
    ip?: string | undefined;
    softwarecomputerId: number;
    locationId: number;
    observation?: string | undefined;
    historial?: string | undefined;
    user_domain?: string | undefined;
    pass_domain?: string | undefined;
    user_admin?: string | undefined;
    pass_admin?: string | undefined;
    user_local?: string | undefined;
    pass_local?: string | undefined;
    user_anydesk?: string | undefined;
    pass_anydesk?: string | undefined;
}
