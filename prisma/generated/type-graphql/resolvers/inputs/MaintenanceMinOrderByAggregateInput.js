"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MaintenanceMinOrderByAggregateInput = class MaintenanceMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceMinOrderByAggregateInput.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceMinOrderByAggregateInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceMinOrderByAggregateInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceMinOrderByAggregateInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceMinOrderByAggregateInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceMinOrderByAggregateInput.prototype, "observation", void 0);
MaintenanceMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceMinOrderByAggregateInput", {
        isAbstract: true
    })
], MaintenanceMinOrderByAggregateInput);
exports.MaintenanceMinOrderByAggregateInput = MaintenanceMinOrderByAggregateInput;
