"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMaintenanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceOrderByWithAggregationInput_1 = require("../../../inputs/MaintenanceOrderByWithAggregationInput");
const MaintenanceScalarWhereWithAggregatesInput_1 = require("../../../inputs/MaintenanceScalarWhereWithAggregatesInput");
const MaintenanceWhereInput_1 = require("../../../inputs/MaintenanceWhereInput");
const MaintenanceScalarFieldEnum_1 = require("../../../../enums/MaintenanceScalarFieldEnum");
let GroupByMaintenanceArgs = class GroupByMaintenanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereInput_1.MaintenanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereInput_1.MaintenanceWhereInput)
], GroupByMaintenanceArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceOrderByWithAggregationInput_1.MaintenanceOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByMaintenanceArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceScalarFieldEnum_1.MaintenanceScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByMaintenanceArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceScalarWhereWithAggregatesInput_1.MaintenanceScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceScalarWhereWithAggregatesInput_1.MaintenanceScalarWhereWithAggregatesInput)
], GroupByMaintenanceArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByMaintenanceArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByMaintenanceArgs.prototype, "skip", void 0);
GroupByMaintenanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByMaintenanceArgs);
exports.GroupByMaintenanceArgs = GroupByMaintenanceArgs;
