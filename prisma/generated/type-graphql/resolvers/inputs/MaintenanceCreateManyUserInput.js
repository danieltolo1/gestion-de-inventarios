"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MaintenanceCreateManyUserInput = class MaintenanceCreateManyUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MaintenanceCreateManyUserInput.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MaintenanceCreateManyUserInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCreateManyUserInput.prototype, "jworkerNameFirm", void 0);
MaintenanceCreateManyUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateManyUserInput", {
        isAbstract: true
    })
], MaintenanceCreateManyUserInput);
exports.MaintenanceCreateManyUserInput = MaintenanceCreateManyUserInput;
