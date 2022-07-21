"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateManyWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateManyComputerInputEnvelope_1 = require("../inputs/MaintenanceCreateManyComputerInputEnvelope");
const MaintenanceCreateOrConnectWithoutComputerInput_1 = require("../inputs/MaintenanceCreateOrConnectWithoutComputerInput");
const MaintenanceCreateWithoutComputerInput_1 = require("../inputs/MaintenanceCreateWithoutComputerInput");
const MaintenanceScalarWhereInput_1 = require("../inputs/MaintenanceScalarWhereInput");
const MaintenanceUpdateManyWithWhereWithoutComputerInput_1 = require("../inputs/MaintenanceUpdateManyWithWhereWithoutComputerInput");
const MaintenanceUpdateWithWhereUniqueWithoutComputerInput_1 = require("../inputs/MaintenanceUpdateWithWhereUniqueWithoutComputerInput");
const MaintenanceUpsertWithWhereUniqueWithoutComputerInput_1 = require("../inputs/MaintenanceUpsertWithWhereUniqueWithoutComputerInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceUpdateManyWithoutComputerInput = class MaintenanceUpdateManyWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateWithoutComputerInput_1.MaintenanceCreateWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateOrConnectWithoutComputerInput_1.MaintenanceCreateOrConnectWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceUpsertWithWhereUniqueWithoutComputerInput_1.MaintenanceUpsertWithWhereUniqueWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateManyComputerInputEnvelope_1.MaintenanceCreateManyComputerInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateManyComputerInputEnvelope_1.MaintenanceCreateManyComputerInputEnvelope)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceUpdateWithWhereUniqueWithoutComputerInput_1.MaintenanceUpdateWithWhereUniqueWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceUpdateManyWithWhereWithoutComputerInput_1.MaintenanceUpdateManyWithWhereWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceScalarWhereInput_1.MaintenanceScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutComputerInput.prototype, "deleteMany", void 0);
MaintenanceUpdateManyWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateManyWithoutComputerInput", {
        isAbstract: true
    })
], MaintenanceUpdateManyWithoutComputerInput);
exports.MaintenanceUpdateManyWithoutComputerInput = MaintenanceUpdateManyWithoutComputerInput;
