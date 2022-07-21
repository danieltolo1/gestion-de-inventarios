"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpsertWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateWithoutProductInput_1 = require("../inputs/MaintenanceCreateWithoutProductInput");
const MaintenanceUpdateWithoutProductInput_1 = require("../inputs/MaintenanceUpdateWithoutProductInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceUpsertWithWhereUniqueWithoutProductInput = class MaintenanceUpsertWithWhereUniqueWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceUpsertWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateWithoutProductInput_1.MaintenanceUpdateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateWithoutProductInput_1.MaintenanceUpdateWithoutProductInput)
], MaintenanceUpsertWithWhereUniqueWithoutProductInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateWithoutProductInput_1.MaintenanceCreateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateWithoutProductInput_1.MaintenanceCreateWithoutProductInput)
], MaintenanceUpsertWithWhereUniqueWithoutProductInput.prototype, "create", void 0);
MaintenanceUpsertWithWhereUniqueWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpsertWithWhereUniqueWithoutProductInput", {
        isAbstract: true
    })
], MaintenanceUpsertWithWhereUniqueWithoutProductInput);
exports.MaintenanceUpsertWithWhereUniqueWithoutProductInput = MaintenanceUpsertWithWhereUniqueWithoutProductInput;
