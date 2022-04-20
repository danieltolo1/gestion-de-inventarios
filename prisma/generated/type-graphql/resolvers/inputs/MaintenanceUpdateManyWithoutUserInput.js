"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateManyUserInputEnvelope_1 = require("../inputs/MaintenanceCreateManyUserInputEnvelope");
const MaintenanceCreateOrConnectWithoutUserInput_1 = require("../inputs/MaintenanceCreateOrConnectWithoutUserInput");
const MaintenanceCreateWithoutUserInput_1 = require("../inputs/MaintenanceCreateWithoutUserInput");
const MaintenanceScalarWhereInput_1 = require("../inputs/MaintenanceScalarWhereInput");
const MaintenanceUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/MaintenanceUpdateManyWithWhereWithoutUserInput");
const MaintenanceUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/MaintenanceUpdateWithWhereUniqueWithoutUserInput");
const MaintenanceUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/MaintenanceUpsertWithWhereUniqueWithoutUserInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceUpdateManyWithoutUserInput = class MaintenanceUpdateManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateWithoutUserInput_1.MaintenanceCreateWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateOrConnectWithoutUserInput_1.MaintenanceCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceUpsertWithWhereUniqueWithoutUserInput_1.MaintenanceUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutUserInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateManyUserInputEnvelope_1.MaintenanceCreateManyUserInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateManyUserInputEnvelope_1.MaintenanceCreateManyUserInputEnvelope)
], MaintenanceUpdateManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutUserInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutUserInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutUserInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceUpdateWithWhereUniqueWithoutUserInput_1.MaintenanceUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceUpdateManyWithWhereWithoutUserInput_1.MaintenanceUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceScalarWhereInput_1.MaintenanceScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
MaintenanceUpdateManyWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], MaintenanceUpdateManyWithoutUserInput);
exports.MaintenanceUpdateManyWithoutUserInput = MaintenanceUpdateManyWithoutUserInput;
