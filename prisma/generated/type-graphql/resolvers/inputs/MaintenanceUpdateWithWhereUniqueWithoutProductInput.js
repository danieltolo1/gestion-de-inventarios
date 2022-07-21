"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceUpdateWithoutProductInput_1 = require("../inputs/MaintenanceUpdateWithoutProductInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceUpdateWithWhereUniqueWithoutProductInput = class MaintenanceUpdateWithWhereUniqueWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceUpdateWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateWithoutProductInput_1.MaintenanceUpdateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateWithoutProductInput_1.MaintenanceUpdateWithoutProductInput)
], MaintenanceUpdateWithWhereUniqueWithoutProductInput.prototype, "data", void 0);
MaintenanceUpdateWithWhereUniqueWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateWithWhereUniqueWithoutProductInput", {
        isAbstract: true
    })
], MaintenanceUpdateWithWhereUniqueWithoutProductInput);
exports.MaintenanceUpdateWithWhereUniqueWithoutProductInput = MaintenanceUpdateWithWhereUniqueWithoutProductInput;
