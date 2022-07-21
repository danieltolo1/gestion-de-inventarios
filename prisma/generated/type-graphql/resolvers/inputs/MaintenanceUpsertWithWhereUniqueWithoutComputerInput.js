"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpsertWithWhereUniqueWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateWithoutComputerInput_1 = require("../inputs/MaintenanceCreateWithoutComputerInput");
const MaintenanceUpdateWithoutComputerInput_1 = require("../inputs/MaintenanceUpdateWithoutComputerInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceUpsertWithWhereUniqueWithoutComputerInput = class MaintenanceUpsertWithWhereUniqueWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceUpsertWithWhereUniqueWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateWithoutComputerInput_1.MaintenanceUpdateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateWithoutComputerInput_1.MaintenanceUpdateWithoutComputerInput)
], MaintenanceUpsertWithWhereUniqueWithoutComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateWithoutComputerInput_1.MaintenanceCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateWithoutComputerInput_1.MaintenanceCreateWithoutComputerInput)
], MaintenanceUpsertWithWhereUniqueWithoutComputerInput.prototype, "create", void 0);
MaintenanceUpsertWithWhereUniqueWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpsertWithWhereUniqueWithoutComputerInput", {
        isAbstract: true
    })
], MaintenanceUpsertWithWhereUniqueWithoutComputerInput);
exports.MaintenanceUpsertWithWhereUniqueWithoutComputerInput = MaintenanceUpsertWithWhereUniqueWithoutComputerInput;
