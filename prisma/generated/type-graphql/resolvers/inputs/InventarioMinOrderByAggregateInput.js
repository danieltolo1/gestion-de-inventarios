"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventarioMinOrderByAggregateInput = class InventarioMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioMinOrderByAggregateInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioMinOrderByAggregateInput.prototype, "productoId", void 0);
InventarioMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioMinOrderByAggregateInput", {
        isAbstract: true
    })
], InventarioMinOrderByAggregateInput);
exports.InventarioMinOrderByAggregateInput = InventarioMinOrderByAggregateInput;
