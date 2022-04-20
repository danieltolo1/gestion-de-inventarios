"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerUpdateWithoutMaintenanceInput_1 = require("../inputs/PartComputerUpdateWithoutMaintenanceInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput = class PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateWithoutMaintenanceInput_1.PartComputerUpdateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateWithoutMaintenanceInput_1.PartComputerUpdateWithoutMaintenanceInput)
], PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput.prototype, "data", void 0);
PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput", {
        isAbstract: true
    })
], PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput);
exports.PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput = PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput;
