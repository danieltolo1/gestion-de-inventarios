"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MaintenanceWhereUniqueInput = class MaintenanceWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MaintenanceWhereUniqueInput.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceWhereUniqueInput.prototype, "userId", void 0);
MaintenanceWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceWhereUniqueInput", {
        isAbstract: true
    })
], MaintenanceWhereUniqueInput);
exports.MaintenanceWhereUniqueInput = MaintenanceWhereUniqueInput;
