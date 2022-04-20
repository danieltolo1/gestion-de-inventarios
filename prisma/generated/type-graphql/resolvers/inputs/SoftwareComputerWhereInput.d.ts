import { ComputerListRelationFilter } from "../inputs/ComputerListRelationFilter";
import { EnumEnum_ArchitectureFilter } from "../inputs/EnumEnum_ArchitectureFilter";
import { EnumEnum_OperatigsystemFilter } from "../inputs/EnumEnum_OperatigsystemFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProgramListRelationFilter } from "../inputs/ProgramListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SoftwareComputerWhereInput {
    AND?: SoftwareComputerWhereInput[] | undefined;
    OR?: SoftwareComputerWhereInput[] | undefined;
    NOT?: SoftwareComputerWhereInput[] | undefined;
    id_softwarecomputer?: IntFilter | undefined;
    computer?: ComputerListRelationFilter | undefined;
    operatingsystem?: EnumEnum_OperatigsystemFilter | undefined;
    license_so?: StringFilter | undefined;
    user_anydesk?: StringNullableFilter | undefined;
    pass_anydesk?: StringNullableFilter | undefined;
    ip?: StringFilter | undefined;
    user_domain?: StringNullableFilter | undefined;
    pass_domain?: StringNullableFilter | undefined;
    user_admin?: StringNullableFilter | undefined;
    pass_admin?: StringNullableFilter | undefined;
    user_local?: StringNullableFilter | undefined;
    pass_local?: StringNullableFilter | undefined;
    architecture?: EnumEnum_ArchitectureFilter | undefined;
    program?: ProgramListRelationFilter | undefined;
}
