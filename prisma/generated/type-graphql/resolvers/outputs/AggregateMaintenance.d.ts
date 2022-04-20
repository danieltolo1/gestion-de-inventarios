import { MaintenanceAvgAggregate } from "../outputs/MaintenanceAvgAggregate";
import { MaintenanceCountAggregate } from "../outputs/MaintenanceCountAggregate";
import { MaintenanceMaxAggregate } from "../outputs/MaintenanceMaxAggregate";
import { MaintenanceMinAggregate } from "../outputs/MaintenanceMinAggregate";
import { MaintenanceSumAggregate } from "../outputs/MaintenanceSumAggregate";
export declare class AggregateMaintenance {
    _count: MaintenanceCountAggregate | null;
    _avg: MaintenanceAvgAggregate | null;
    _sum: MaintenanceSumAggregate | null;
    _min: MaintenanceMinAggregate | null;
    _max: MaintenanceMaxAggregate | null;
}
