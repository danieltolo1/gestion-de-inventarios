"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateWithoutUserInput_1 = require("../inputs/MaintenanceCreateWithoutUserInput");
const MaintenanceUpdateWithoutUserInput_1 = require("../inputs/MaintenanceUpdateWithoutUserInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceUpsertWithWhereUniqueWithoutUserInput = class MaintenanceUpsertWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateWithoutUserInput_1.MaintenanceUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateWithoutUserInput_1.MaintenanceUpdateWithoutUserInput)
], MaintenanceUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateWithoutUserInput_1.MaintenanceCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateWithoutUserInput_1.MaintenanceCreateWithoutUserInput)
], MaintenanceUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
MaintenanceUpsertWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], MaintenanceUpsertWithWhereUniqueWithoutUserInput);
exports.MaintenanceUpsertWithWhereUniqueWithoutUserInput = MaintenanceUpsertWithWhereUniqueWithoutUserInput;
