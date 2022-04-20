import { PartComputerAvgAggregate } from "../outputs/PartComputerAvgAggregate";
import { PartComputerCountAggregate } from "../outputs/PartComputerCountAggregate";
import { PartComputerMaxAggregate } from "../outputs/PartComputerMaxAggregate";
import { PartComputerMinAggregate } from "../outputs/PartComputerMinAggregate";
import { PartComputerSumAggregate } from "../outputs/PartComputerSumAggregate";
export declare class AggregatePartComputer {
    _count: PartComputerCountAggregate | null;
    _avg: PartComputerAvgAggregate | null;
    _sum: PartComputerSumAggregate | null;
    _min: PartComputerMinAggregate | null;
    _max: PartComputerMaxAggregate | null;
}
