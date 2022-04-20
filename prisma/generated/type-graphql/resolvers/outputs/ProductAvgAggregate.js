"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductAvgAggregate = class ProductAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductAvgAggregate.prototype, "id_product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductAvgAggregate.prototype, "product_typeId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductAvgAggregate.prototype, "stateId", void 0);
ProductAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProductAvgAggregate", {
        isAbstract: true
    })
], ProductAvgAggregate);
exports.ProductAvgAggregate = ProductAvgAggregate;
