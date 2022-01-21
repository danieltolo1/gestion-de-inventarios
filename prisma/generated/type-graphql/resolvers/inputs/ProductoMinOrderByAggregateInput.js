"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductoMinOrderByAggregateInput = class ProductoMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoMinOrderByAggregateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoMinOrderByAggregateInput.prototype, "foto", void 0);
ProductoMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoMinOrderByAggregateInput", {
        isAbstract: true
    })
], ProductoMinOrderByAggregateInput);
exports.ProductoMinOrderByAggregateInput = ProductoMinOrderByAggregateInput;
