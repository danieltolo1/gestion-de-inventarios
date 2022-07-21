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
    ComputerScalarFieldEnum["ip"] = "ip";
    ComputerScalarFieldEnum["softwarecomputerId"] = "softwarecomputerId";
    ComputerScalarFieldEnum["locationId"] = "locationId";
    ComputerScalarFieldEnum["observation"] = "observation";
    ComputerScalarFieldEnum["historial"] = "historial";
    ComputerScalarFieldEnum["user_domain"] = "user_domain";
    ComputerScalarFieldEnum["pass_domain"] = "pass_domain";
    ComputerScalarFieldEnum["user_admin"] = "user_admin";
    ComputerScalarFieldEnum["pass_admin"] = "pass_admin";
    ComputerScalarFieldEnum["user_local"] = "user_local";
    ComputerScalarFieldEnum["pass_local"] = "pass_local";
    ComputerScalarFieldEnum["user_anydesk"] = "user_anydesk";
    ComputerScalarFieldEnum["pass_anydesk"] = "pass_anydesk";
})(ComputerScalarFieldEnum = exports.ComputerScalarFieldEnum || (exports.ComputerScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ComputerScalarFieldEnum, {
    name: "ComputerScalarFieldEnum",
    description: undefined,
});
