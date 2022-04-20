"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var ComputerScalarFieldEnum;
(function (ComputerScalarFieldEnum) {
    ComputerScalarFieldEnum["id_computer"] = "id_computer";
    ComputerScalarFieldEnum["buy_date"] = "buy_date";
    ComputerScalarFieldEnum["price"] = "price";
    ComputerScalarFieldEnum["internal_code"] = "internal_code";
    ComputerScalarFieldEnum["serial_number"] = "serial_number";
    ComputerScalarFieldEnum["memory"] = "memory";
    ComputerScalarFieldEnum["hard_disk"] = "hard_disk";
    ComputerScalarFieldEnum["processor"] = "processor";
    ComputerScalarFieldEnum["optical_unit"] = "optical_unit";
    ComputerScalarFieldEnum["model"] = "model";
    ComputerScalarFieldEnum["stateId"] = "stateId";
    ComputerScalarFieldEnum["softwarecomputerId"] = "softwarecomputerId";
    ComputerScalarFieldEnum["observation"] = "observation";
    ComputerScalarFieldEnum["historial"] = "historial";
})(ComputerScalarFieldEnum = exports.ComputerScalarFieldEnum || (exports.ComputerScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ComputerScalarFieldEnum, {
    name: "ComputerScalarFieldEnum",
    description: undefined,
});
