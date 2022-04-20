"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateManyUserInputEnvelope_1 = require("../inputs/MaintenanceCreateManyUserInputEnvelope");
const MaintenanceCreateOrConnectWithoutUserInput_1 = require("../inputs/MaintenanceCreateOrConnectWithoutUserInput");
const MaintenanceCreateWithoutUserInput_1 = require("../inputs/MaintenanceCreateWithoutUserInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceCreateNestedManyWithoutUserInput = class MaintenanceCreateNestedManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateWithoutUserInput_1.MaintenanceCreateWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateNestedManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateOrConnectWithoutUserInput_1.MaintenanceCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateManyUserInputEnvelope_1.MaintenanceCreateManyUserInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateManyUserInputEnvelope_1.MaintenanceCreateManyUserInputEnvelope)
], MaintenanceCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
MaintenanceCreateNestedManyWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], MaintenanceCreateNestedManyWithoutUserInput);
exports.MaintenanceCreateNestedManyWithoutUserInput = MaintenanceCreateNestedManyWithoutUserInput;
