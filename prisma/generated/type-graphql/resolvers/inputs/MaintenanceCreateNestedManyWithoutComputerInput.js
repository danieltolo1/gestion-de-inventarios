"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateNestedManyWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateManyComputerInputEnvelope_1 = require("../inputs/MaintenanceCreateManyComputerInputEnvelope");
const MaintenanceCreateOrConnectWithoutComputerInput_1 = require("../inputs/MaintenanceCreateOrConnectWithoutComputerInput");
const MaintenanceCreateWithoutComputerInput_1 = require("../inputs/MaintenanceCreateWithoutComputerInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceCreateNestedManyWithoutComputerInput = class MaintenanceCreateNestedManyWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateWithoutComputerInput_1.MaintenanceCreateWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateNestedManyWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateOrConnectWithoutComputerInput_1.MaintenanceCreateOrConnectWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateNestedManyWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateManyComputerInputEnvelope_1.MaintenanceCreateManyComputerInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateManyComputerInputEnvelope_1.MaintenanceCreateManyComputerInputEnvelope)
], MaintenanceCreateNestedManyWithoutComputerInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateNestedManyWithoutComputerInput.prototype, "connect", void 0);
MaintenanceCreateNestedManyWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateNestedManyWithoutComputerInput", {
        isAbstract: true
    })
], MaintenanceCreateNestedManyWithoutComputerInput);
exports.MaintenanceCreateNestedManyWithoutComputerInput = MaintenanceCreateNestedManyWithoutComputerInput;
