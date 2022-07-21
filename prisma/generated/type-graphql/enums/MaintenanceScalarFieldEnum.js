"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var MaintenanceScalarFieldEnum;
(function (MaintenanceScalarFieldEnum) {
    MaintenanceScalarFieldEnum["id_maintenance"] = "id_maintenance";
    MaintenanceScalarFieldEnum["date_maintenance"] = "date_maintenance";
    MaintenanceScalarFieldEnum["jworkerNameFirm"] = "jworkerNameFirm";
    MaintenanceScalarFieldEnum["userId"] = "userId";
    MaintenanceScalarFieldEnum["computerId"] = "computerId";
    MaintenanceScalarFieldEnum["observation"] = "observation";
})(MaintenanceScalarFieldEnum = exports.MaintenanceScalarFieldEnum || (exports.MaintenanceScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MaintenanceScalarFieldEnum, {
    name: "MaintenanceScalarFieldEnum",
    description: undefined,
});
