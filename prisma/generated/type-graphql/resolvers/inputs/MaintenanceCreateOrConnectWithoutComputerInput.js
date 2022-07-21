"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateOrConnectWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateWithoutComputerInput_1 = require("../inputs/MaintenanceCreateWithoutComputerInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceCreateOrConnectWithoutComputerInput = class MaintenanceCreateOrConnectWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceCreateOrConnectWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateWithoutComputerInput_1.MaintenanceCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateWithoutComputerInput_1.MaintenanceCreateWithoutComputerInput)
], MaintenanceCreateOrConnectWithoutComputerInput.prototype, "create", void 0);
MaintenanceCreateOrConnectWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateOrConnectWithoutComputerInput", {
        isAbstract: true
    })
], MaintenanceCreateOrConnectWithoutComputerInput);
exports.MaintenanceCreateOrConnectWithoutComputerInput = MaintenanceCreateOrConnectWithoutComputerInput;
