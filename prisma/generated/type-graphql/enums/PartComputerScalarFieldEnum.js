"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var PartComputerScalarFieldEnum;
(function (PartComputerScalarFieldEnum) {
    PartComputerScalarFieldEnum["id_partComputer"] = "id_partComputer";
    PartComputerScalarFieldEnum["productId"] = "productId";
    PartComputerScalarFieldEnum["computerId"] = "computerId";
    PartComputerScalarFieldEnum["locationId"] = "locationId";
    PartComputerScalarFieldEnum["maintenanceId"] = "maintenanceId";
    PartComputerScalarFieldEnum["name_part"] = "name_part";
})(PartComputerScalarFieldEnum = exports.PartComputerScalarFieldEnum || (exports.PartComputerScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PartComputerScalarFieldEnum, {
    name: "PartComputerScalarFieldEnum",
    description: undefined,
});
