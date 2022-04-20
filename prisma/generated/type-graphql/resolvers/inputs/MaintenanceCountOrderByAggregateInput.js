"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MaintenanceCountOrderByAggregateInput = class MaintenanceCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCountOrderByAggregateInput.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCountOrderByAggregateInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCountOrderByAggregateInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCountOrderByAggregateInput.prototype, "userId", void 0);
MaintenanceCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCountOrderByAggregateInput", {
        isAbstract: true
    })
], MaintenanceCountOrderByAggregateInput);
exports.MaintenanceCountOrderByAggregateInput = MaintenanceCountOrderByAggregateInput;
