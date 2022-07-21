import { ComputerListRelationFilter } from "../inputs/ComputerListRelationFilter";
import { EnumEnum_ArchitectureFilter } from "../inputs/EnumEnum_ArchitectureFilter";
import { EnumEnum_OperatigsystemFilter } from "../inputs/EnumEnum_OperatigsystemFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SoftwareComputerWhereInput {
    AND?: SoftwareComputerWhereInput[] | undefined;
    OR?: SoftwareComputerWhereInput[] | undefined;
    NOT?: SoftwareComputerWhereInput[] | undefined;
    id_softwarecomputer?: IntFilter | undefined;
    computer?: ComputerListRelationFilter | undefined;
    operatingsystem?: EnumEnum_OperatigsystemFilter | undefined;
    license_soA?: StringFilter | undefined;
    architecture?: EnumEnum_ArchitectureFilter | undefined;
}
