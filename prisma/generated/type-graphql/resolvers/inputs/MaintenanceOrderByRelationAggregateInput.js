"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MaintenanceOrderByRelationAggregateInput = class MaintenanceOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceOrderByRelationAggregateInput.prototype, "_count", void 0);
MaintenanceOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceOrderByRelationAggregateInput", {
        isAbstract: true
    })
], MaintenanceOrderByRelationAggregateInput);
exports.MaintenanceOrderByRelationAggregateInput = MaintenanceOrderByRelationAggregateInput;
