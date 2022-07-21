"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateWithoutProductInput_1 = require("../inputs/MaintenanceCreateWithoutProductInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceCreateOrConnectWithoutProductInput = class MaintenanceCreateOrConnectWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceCreateOrConnectWithoutProductInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateWithoutProductInput_1.MaintenanceCreateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateWithoutProductInput_1.MaintenanceCreateWithoutProductInput)
], MaintenanceCreateOrConnectWithoutProductInput.prototype, "create", void 0);
MaintenanceCreateOrConnectWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateOrConnectWithoutProductInput", {
        isAbstract: true
    })
], MaintenanceCreateOrConnectWithoutProductInput);
exports.MaintenanceCreateOrConnectWithoutProductInput = MaintenanceCreateOrConnectWithoutProductInput;
