import { SoftwareComputerAvgAggregate } from "../outputs/SoftwareComputerAvgAggregate";
import { SoftwareComputerCountAggregate } from "../outputs/SoftwareComputerCountAggregate";
import { SoftwareComputerMaxAggregate } from "../outputs/SoftwareComputerMaxAggregate";
import { SoftwareComputerMinAggregate } from "../outputs/SoftwareComputerMinAggregate";
import { SoftwareComputerSumAggregate } from "../outputs/SoftwareComputerSumAggregate";
export declare class AggregateSoftwareComputer {
    _count: SoftwareComputerCountAggregate | null;
    _avg: SoftwareComputerAvgAggregate | null;
    _sum: SoftwareComputerSumAggregate | null;
    _min: SoftwareComputerMinAggregate | null;
    _max: SoftwareComputerMaxAggregate | null;
}
