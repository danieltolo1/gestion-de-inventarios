"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceAvgOrderByAggregateInput_1 = require("../inputs/MaintenanceAvgOrderByAggregateInput");
const MaintenanceCountOrderByAggregateInput_1 = require("../inputs/MaintenanceCountOrderByAggregateInput");
const MaintenanceMaxOrderByAggregateInput_1 = require("../inputs/MaintenanceMaxOrderByAggregateInput");
const MaintenanceMinOrderByAggregateInput_1 = require("../inputs/MaintenanceMinOrderByAggregateInput");
const MaintenanceSumOrderByAggregateInput_1 = require("../inputs/MaintenanceSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MaintenanceOrderByWithAggregationInput = class MaintenanceOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceOrderByWithAggregationInput.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceOrderByWithAggregationInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceOrderByWithAggregationInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceOrderByWithAggregationInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCountOrderByAggregateInput_1.MaintenanceCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCountOrderByAggregateInput_1.MaintenanceCountOrderByAggregateInput)
], MaintenanceOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceAvgOrderByAggregateInput_1.MaintenanceAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceAvgOrderByAggregateInput_1.MaintenanceAvgOrderByAggregateInput)
], MaintenanceOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceMaxOrderByAggregateInput_1.MaintenanceMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceMaxOrderByAggregateInput_1.MaintenanceMaxOrderByAggregateInput)
], MaintenanceOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceMinOrderByAggregateInput_1.MaintenanceMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceMinOrderByAggregateInput_1.MaintenanceMinOrderByAggregateInput)
], MaintenanceOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceSumOrderByAggregateInput_1.MaintenanceSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceSumOrderByAggregateInput_1.MaintenanceSumOrderByAggregateInput)
], MaintenanceOrderByWithAggregationInput.prototype, "_sum", void 0);
MaintenanceOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceOrderByWithAggregationInput", {
        isAbstract: true
    })
], MaintenanceOrderByWithAggregationInput);
exports.MaintenanceOrderByWithAggregationInput = MaintenanceOrderByWithAggregationInput;
