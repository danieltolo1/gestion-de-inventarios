"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductoCountOrderByAggregateInput = class ProductoCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCountOrderByAggregateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCountOrderByAggregateInput.prototype, "foto", void 0);
ProductoCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoCountOrderByAggregateInput", {
        isAbstract: true
    })
], ProductoCountOrderByAggregateInput);
exports.ProductoCountOrderByAggregateInput = ProductoCountOrderByAggregateInput;
