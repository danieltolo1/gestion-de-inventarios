import { ComputerAvgAggregate } from "../outputs/ComputerAvgAggregate";
import { ComputerCountAggregate } from "../outputs/ComputerCountAggregate";
import { ComputerMaxAggregate } from "../outputs/ComputerMaxAggregate";
import { ComputerMinAggregate } from "../outputs/ComputerMinAggregate";
import { ComputerSumAggregate } from "../outputs/ComputerSumAggregate";
export declare class ComputerGroupBy {
    id_computer: number;
    buy_date: Date | null;
    price: number | null;
    internal_code: string;
    serial_number: string;
    memory: string;
    hard_disk: string;
    processor: string;
    optical_unit: boolean | null;
    model: string;
    stateId: number;
    softwarecomputerId: number;
    observation: string | null;
    historial: string | null;
    _count: ComputerCountAggregate | null;
    _avg: ComputerAvgAggregate | null;
    _sum: ComputerSumAggregate | null;
    _min: ComputerMinAggregate | null;
    _max: ComputerMaxAggregate | null;
}
