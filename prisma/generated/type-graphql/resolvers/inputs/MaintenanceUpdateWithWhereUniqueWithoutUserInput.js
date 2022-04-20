"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceUpdateWithoutUserInput_1 = require("../inputs/MaintenanceUpdateWithoutUserInput");
const MaintenanceWhereUniqueInput_1 = require("../inputs/MaintenanceWhereUniqueInput");
let MaintenanceUpdateWithWhereUniqueWithoutUserInput = class MaintenanceUpdateWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], MaintenanceUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateWithoutUserInput_1.MaintenanceUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateWithoutUserInput_1.MaintenanceUpdateWithoutUserInput)
], MaintenanceUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
MaintenanceUpdateWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], MaintenanceUpdateWithWhereUniqueWithoutUserInput);
exports.MaintenanceUpdateWithWhereUniqueWithoutUserInput = MaintenanceUpdateWithWhereUniqueWithoutUserInput;
