"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateNestedManyWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateOrConnectWithoutProductInput_1 = require("../inputs/MaintenanceCreateOrConnectWithoutProductInput");
const MaintenanceCreateWithoutProductInput_1 = require("../inputs/MaintenanceCreateWithoutProductInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceCreateNestedManyWithoutProductInput = class MaintenanceCreateNestedManyWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateWithoutProductInput_1.MaintenanceCreateWithoutProductInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateNestedManyWithoutProductInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateOrConnectWithoutProductInput_1.MaintenanceCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateNestedManyWithoutProductInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateNestedManyWithoutProductInput.prototype, "connect", void 0);
MaintenanceCreateNestedManyWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateNestedManyWithoutProductInput", {
        isAbstract: true
    })
], MaintenanceCreateNestedManyWithoutProductInput);
exports.MaintenanceCreateNestedManyWithoutProductInput = MaintenanceCreateNestedManyWithoutProductInput;
