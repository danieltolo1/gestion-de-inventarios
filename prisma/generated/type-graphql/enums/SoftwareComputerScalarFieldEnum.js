"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var SoftwareComputerScalarFieldEnum;
(function (SoftwareComputerScalarFieldEnum) {
    SoftwareComputerScalarFieldEnum["id_softwarecomputer"] = "id_softwarecomputer";
    SoftwareComputerScalarFieldEnum["operatingsystem"] = "operatingsystem";
    SoftwareComputerScalarFieldEnum["license_soA"] = "license_soA";
    SoftwareComputerScalarFieldEnum["architecture"] = "architecture";
})(SoftwareComputerScalarFieldEnum = exports.SoftwareComputerScalarFieldEnum || (exports.SoftwareComputerScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SoftwareComputerScalarFieldEnum, {
    name: "SoftwareComputerScalarFieldEnum",
    description: undefined,
});
