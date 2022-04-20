import { LocationAvgAggregate } from "../outputs/LocationAvgAggregate";
import { LocationCountAggregate } from "../outputs/LocationCountAggregate";
import { LocationMaxAggregate } from "../outputs/LocationMaxAggregate";
import { LocationMinAggregate } from "../outputs/LocationMinAggregate";
import { LocationSumAggregate } from "../outputs/LocationSumAggregate";
export declare class AggregateLocation {
    _count: LocationCountAggregate | null;
    _avg: LocationAvgAggregate | null;
    _sum: LocationSumAggregate | null;
    _min: LocationMinAggregate | null;
    _max: LocationMaxAggregate | null;
}
