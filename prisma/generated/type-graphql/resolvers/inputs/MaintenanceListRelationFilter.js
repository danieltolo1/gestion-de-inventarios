"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceWhereInput_1 = require("../inputs/MaintenanceWhereInput");
let MaintenanceListRelationFilter = class MaintenanceListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereInput_1.MaintenanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereInput_1.MaintenanceWhereInput)
], MaintenanceListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereInput_1.MaintenanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereInput_1.MaintenanceWhereInput)
], MaintenanceListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereInput_1.MaintenanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereInput_1.MaintenanceWhereInput)
], MaintenanceListRelationFilter.prototype, "none", void 0);
MaintenanceListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceListRelationFilter", {
        isAbstract: true
    })
], MaintenanceListRelationFilter);
exports.MaintenanceListRelationFilter = MaintenanceListRelationFilter;
