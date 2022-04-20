import { StateAvgAggregate } from "../outputs/StateAvgAggregate";
import { StateCountAggregate } from "../outputs/StateCountAggregate";
import { StateMaxAggregate } from "../outputs/StateMaxAggregate";
import { StateMinAggregate } from "../outputs/StateMinAggregate";
import { StateSumAggregate } from "../outputs/StateSumAggregate";
export declare class AggregateState {
    _count: StateCountAggregate | null;
    _avg: StateAvgAggregate | null;
    _sum: StateSumAggregate | null;
    _min: StateMinAggregate | null;
    _max: StateMaxAggregate | null;
}
