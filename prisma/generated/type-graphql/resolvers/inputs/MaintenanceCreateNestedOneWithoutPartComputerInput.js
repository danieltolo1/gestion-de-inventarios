"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateNestedOneWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateOrConnectWithoutPartComputerInput_1 = require("../inputs/MaintenanceCreateOrConnectWithoutPartComputerInput");
const MaintenanceCreateWithoutPartComputerInput_1 = require("../inputs/MaintenanceCreateWithoutPartComputerInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceCreateNestedOneWithoutPartComputerInput = class MaintenanceCreateNestedOneWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateWithoutPartComputerInput_1.MaintenanceCreateWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateWithoutPartComputerInput_1.MaintenanceCreateWithoutPartComputerInput)
], MaintenanceCreateNestedOneWithoutPartComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateOrConnectWithoutPartComputerInput_1.MaintenanceCreateOrConnectWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateOrConnectWithoutPartComputerInput_1.MaintenanceCreateOrConnectWithoutPartComputerInput)
], MaintenanceCreateNestedOneWithoutPartComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceCreateNestedOneWithoutPartComputerInput.prototype, "connect", void 0);
MaintenanceCreateNestedOneWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateNestedOneWithoutPartComputerInput", {
        isAbstract: true
    })
], MaintenanceCreateNestedOneWithoutPartComputerInput);
exports.MaintenanceCreateNestedOneWithoutPartComputerInput = MaintenanceCreateNestedOneWithoutPartComputerInput;
