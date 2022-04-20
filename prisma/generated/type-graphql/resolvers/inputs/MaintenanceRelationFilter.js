"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceWhereInput_1 = require("../inputs/MaintenanceWhereInput");
let MaintenanceRelationFilter = class MaintenanceRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereInput_1.MaintenanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereInput_1.MaintenanceWhereInput)
], MaintenanceRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereInput_1.MaintenanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereInput_1.MaintenanceWhereInput)
], MaintenanceRelationFilter.prototype, "isNot", void 0);
MaintenanceRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceRelationFilter", {
        isAbstract: true
    })
], MaintenanceRelationFilter);
exports.MaintenanceRelationFilter = MaintenanceRelationFilter;
