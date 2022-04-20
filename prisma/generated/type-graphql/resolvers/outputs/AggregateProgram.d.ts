import { ProgramAvgAggregate } from "../outputs/ProgramAvgAggregate";
import { ProgramCountAggregate } from "../outputs/ProgramCountAggregate";
import { ProgramMaxAggregate } from "../outputs/ProgramMaxAggregate";
import { ProgramMinAggregate } from "../outputs/ProgramMinAggregate";
import { ProgramSumAggregate } from "../outputs/ProgramSumAggregate";
export declare class AggregateProgram {
    _count: ProgramCountAggregate | null;
    _avg: ProgramAvgAggregate | null;
    _sum: ProgramSumAggregate | null;
    _min: ProgramMinAggregate | null;
    _max: ProgramMaxAggregate | null;
}
