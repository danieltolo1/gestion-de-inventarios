import { SoftwareComputerAvgAggregate } from "../outputs/SoftwareComputerAvgAggregate";
import { SoftwareComputerCountAggregate } from "../outputs/SoftwareComputerCountAggregate";
import { SoftwareComputerMaxAggregate } from "../outputs/SoftwareComputerMaxAggregate";
import { SoftwareComputerMinAggregate } from "../outputs/SoftwareComputerMinAggregate";
import { SoftwareComputerSumAggregate } from "../outputs/SoftwareComputerSumAggregate";
export declare class SoftwareComputerGroupBy {
    id_softwarecomputer: number;
    operatingsystem: "Windows_7" | "Windows_8" | "Windows_10" | "Windows_11";
    license_so: string;
    user_anydesk: string | null;
    pass_anydesk: string | null;
    ip: string;
    user_domain: string | null;
    pass_domain: string | null;
    user_admin: string | null;
    pass_admin: string | null;
    user_local: string | null;
    pass_local: string | null;
    architecture: "bits_32" | "bits_64";
    _count: SoftwareComputerCountAggregate | null;
    _avg: SoftwareComputerAvgAggregate | null;
    _sum: SoftwareComputerSumAggregate | null;
    _min: SoftwareComputerMinAggregate | null;
    _max: SoftwareComputerMaxAggregate | null;
}
