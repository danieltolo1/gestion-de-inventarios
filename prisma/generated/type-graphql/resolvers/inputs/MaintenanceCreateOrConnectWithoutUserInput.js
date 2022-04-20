"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateWithoutUserInput_1 = require("../inputs/MaintenanceCreateWithoutUserInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceCreateOrConnectWithoutUserInput = class MaintenanceCreateOrConnectWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceCreateOrConnectWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateWithoutUserInput_1.MaintenanceCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateWithoutUserInput_1.MaintenanceCreateWithoutUserInput)
], MaintenanceCreateOrConnectWithoutUserInput.prototype, "create", void 0);
MaintenanceCreateOrConnectWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], MaintenanceCreateOrConnectWithoutUserInput);
exports.MaintenanceCreateOrConnectWithoutUserInput = MaintenanceCreateOrConnectWithoutUserInput;
