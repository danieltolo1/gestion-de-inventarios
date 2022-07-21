"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateWithWhereUniqueWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceUpdateWithoutComputerInput_1 = require("../inputs/MaintenanceUpdateWithoutComputerInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceUpdateWithWhereUniqueWithoutComputerInput = class MaintenanceUpdateWithWhereUniqueWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceUpdateWithWhereUniqueWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateWithoutComputerInput_1.MaintenanceUpdateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateWithoutComputerInput_1.MaintenanceUpdateWithoutComputerInput)
], MaintenanceUpdateWithWhereUniqueWithoutComputerInput.prototype, "data", void 0);
MaintenanceUpdateWithWhereUniqueWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateWithWhereUniqueWithoutComputerInput", {
        isAbstract: true
    })
], MaintenanceUpdateWithWhereUniqueWithoutComputerInput);
exports.MaintenanceUpdateWithWhereUniqueWithoutComputerInput = MaintenanceUpdateWithWhereUniqueWithoutComputerInput;
