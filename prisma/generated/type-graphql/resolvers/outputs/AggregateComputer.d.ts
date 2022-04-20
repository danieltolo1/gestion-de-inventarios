import { ComputerAvgAggregate } from "../outputs/ComputerAvgAggregate";
import { ComputerCountAggregate } from "../outputs/ComputerCountAggregate";
import { ComputerMaxAggregate } from "../outputs/ComputerMaxAggregate";
import { ComputerMinAggregate } from "../outputs/ComputerMinAggregate";
import { ComputerSumAggregate } from "../outputs/ComputerSumAggregate";
export declare class AggregateComputer {
    _count: ComputerCountAggregate | null;
    _avg: ComputerAvgAggregate | null;
    _sum: ComputerSumAggregate | null;
    _min: ComputerMinAggregate | null;
    _max: ComputerMaxAggregate | null;
}
