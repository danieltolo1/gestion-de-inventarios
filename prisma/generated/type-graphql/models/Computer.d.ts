import { PartComputer } from "../models/PartComputer";
import { SoftwareComputer } from "../models/SoftwareComputer";
import { State } from "../models/State";
import { ComputerCount } from "../resolvers/outputs/ComputerCount";
export declare class Computer {
    id_computer: number;
    buy_date?: Date | null;
    price?: number | null;
    internal_code: string;
    serial_number: string;
    memory: string;
    hard_disk: string;
    processor: string;
    optical_unit?: boolean | null;
    model: string;
    state?: State;
    stateId: number;
    softwarecomputer?: SoftwareComputer;
    softwarecomputerId: number;
    partComputer?: PartComputer[];
    observation?: string | null;
    historial?: string | null;
    _count?: ComputerCount | null;
}
