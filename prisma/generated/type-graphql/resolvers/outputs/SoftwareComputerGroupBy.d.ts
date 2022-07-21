import { SoftwareComputerAvgAggregate } from "../outputs/SoftwareComputerAvgAggregate";
import { SoftwareComputerCountAggregate } from "../outputs/SoftwareComputerCountAggregate";
import { SoftwareComputerMaxAggregate } from "../outputs/SoftwareComputerMaxAggregate";
import { SoftwareComputerMinAggregate } from "../outputs/SoftwareComputerMinAggregate";
import { SoftwareComputerSumAggregate } from "../outputs/SoftwareComputerSumAggregate";
export declare class SoftwareComputerGroupBy {
    id_softwarecomputer: number;
    operatingsystem: "Windows_7" | "Windows_8" | "Windows_10" | "Windows_11";
    license_soA: string;
    architecture: "bits_32" | "bits_64";
    _count: SoftwareComputerCountAggregate | null;
    _avg: SoftwareComputerAvgAggregate | null;
    _sum: SoftwareComputerSumAggregate | null;
    _min: SoftwareComputerMinAggregate | null;
    _max: SoftwareComputerMaxAggregate | null;
}
