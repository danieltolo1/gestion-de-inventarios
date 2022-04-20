"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateWithoutMaintenanceInput_1 = require("../inputs/PartComputerCreateWithoutMaintenanceInput");
const PartComputerUpdateWithoutMaintenanceInput_1 = require("../inputs/PartComputerUpdateWithoutMaintenanceInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput = class PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateWithoutMaintenanceInput_1.PartComputerUpdateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateWithoutMaintenanceInput_1.PartComputerUpdateWithoutMaintenanceInput)
], PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateWithoutMaintenanceInput_1.PartComputerCreateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateWithoutMaintenanceInput_1.PartComputerCreateWithoutMaintenanceInput)
], PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput.prototype, "create", void 0);
PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput", {
        isAbstract: true
    })
], PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput);
exports.PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput = PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput;
