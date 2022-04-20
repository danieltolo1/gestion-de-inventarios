"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateOrConnectWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateWithoutPartComputerInput_1 = require("../inputs/MaintenanceCreateWithoutPartComputerInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceCreateOrConnectWithoutPartComputerInput = class MaintenanceCreateOrConnectWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceCreateOrConnectWithoutPartComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateWithoutPartComputerInput_1.MaintenanceCreateWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateWithoutPartComputerInput_1.MaintenanceCreateWithoutPartComputerInput)
], MaintenanceCreateOrConnectWithoutPartComputerInput.prototype, "create", void 0);
MaintenanceCreateOrConnectWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateOrConnectWithoutPartComputerInput", {
        isAbstract: true
    })
], MaintenanceCreateOrConnectWithoutPartComputerInput);
exports.MaintenanceCreateOrConnectWithoutPartComputerInput = MaintenanceCreateOrConnectWithoutPartComputerInput;
