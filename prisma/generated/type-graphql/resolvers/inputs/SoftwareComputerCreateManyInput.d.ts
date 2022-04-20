export declare class SoftwareComputerCreateManyInput {
    id_softwarecomputer?: number | undefined;
    operatingsystem: "Windows_7" | "Windows_8" | "Windows_10" | "Windows_11";
    license_so: string;
    user_anydesk?: string | undefined;
    pass_anydesk?: string | undefined;
    ip: string;
    user_domain?: string | undefined;
    pass_domain?: string | undefined;
    user_admin?: string | undefined;
    pass_admin?: string | undefined;
    user_local?: string | undefined;
    pass_local?: string | undefined;
    architecture: "bits_32" | "bits_64";
}
