"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MaintenanceSumOrderByAggregateInput = class MaintenanceSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceSumOrderByAggregateInput.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceSumOrderByAggregateInput.prototype, "computerId", void 0);
MaintenanceSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceSumOrderByAggregateInput", {
        isAbstract: true
    })
], MaintenanceSumOrderByAggregateInput);
exports.MaintenanceSumOrderByAggregateInput = MaintenanceSumOrderByAggregateInput;
