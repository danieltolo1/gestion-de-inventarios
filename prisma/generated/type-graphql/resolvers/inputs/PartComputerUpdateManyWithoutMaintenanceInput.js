"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateManyWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateManyMaintenanceInputEnvelope_1 = require("../inputs/PartComputerCreateManyMaintenanceInputEnvelope");
const PartComputerCreateOrConnectWithoutMaintenanceInput_1 = require("../inputs/PartComputerCreateOrConnectWithoutMaintenanceInput");
const PartComputerCreateWithoutMaintenanceInput_1 = require("../inputs/PartComputerCreateWithoutMaintenanceInput");
const PartComputerScalarWhereInput_1 = require("../inputs/PartComputerScalarWhereInput");
const PartComputerUpdateManyWithWhereWithoutMaintenanceInput_1 = require("../inputs/PartComputerUpdateManyWithWhereWithoutMaintenanceInput");
const PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput_1 = require("../inputs/PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput");
const PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput_1 = require("../inputs/PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerUpdateManyWithoutMaintenanceInput = class PartComputerUpdateManyWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateWithoutMaintenanceInput_1.PartComputerCreateWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateOrConnectWithoutMaintenanceInput_1.PartComputerCreateOrConnectWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput_1.PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateManyMaintenanceInputEnvelope_1.PartComputerCreateManyMaintenanceInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateManyMaintenanceInputEnvelope_1.PartComputerCreateManyMaintenanceInputEnvelope)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput_1.PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerUpdateManyWithWhereWithoutMaintenanceInput_1.PartComputerUpdateManyWithWhereWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarWhereInput_1.PartComputerScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerUpdateManyWithoutMaintenanceInput.prototype, "deleteMany", void 0);
PartComputerUpdateManyWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateManyWithoutMaintenanceInput", {
        isAbstract: true
    })
], PartComputerUpdateManyWithoutMaintenanceInput);
exports.PartComputerUpdateManyWithoutMaintenanceInput = PartComputerUpdateManyWithoutMaintenanceInput;
