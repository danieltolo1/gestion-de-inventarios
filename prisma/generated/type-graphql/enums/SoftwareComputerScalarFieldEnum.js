"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var SoftwareComputerScalarFieldEnum;
(function (SoftwareComputerScalarFieldEnum) {
    SoftwareComputerScalarFieldEnum["id_softwarecomputer"] = "id_softwarecomputer";
    SoftwareComputerScalarFieldEnum["operatingsystem"] = "operatingsystem";
    SoftwareComputerScalarFieldEnum["license_so"] = "license_so";
    SoftwareComputerScalarFieldEnum["user_anydesk"] = "user_anydesk";
    SoftwareComputerScalarFieldEnum["pass_anydesk"] = "pass_anydesk";
    SoftwareComputerScalarFieldEnum["ip"] = "ip";
    SoftwareComputerScalarFieldEnum["user_domain"] = "user_domain";
    SoftwareComputerScalarFieldEnum["pass_domain"] = "pass_domain";
    SoftwareComputerScalarFieldEnum["user_admin"] = "user_admin";
    SoftwareComputerScalarFieldEnum["pass_admin"] = "pass_admin";
    SoftwareComputerScalarFieldEnum["user_local"] = "user_local";
    SoftwareComputerScalarFieldEnum["pass_local"] = "pass_local";
    SoftwareComputerScalarFieldEnum["architecture"] = "architecture";
})(SoftwareComputerScalarFieldEnum = exports.SoftwareComputerScalarFieldEnum || (exports.SoftwareComputerScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SoftwareComputerScalarFieldEnum, {
    name: "SoftwareComputerScalarFieldEnum",
    description: undefined,
});
