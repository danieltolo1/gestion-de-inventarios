"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductOrderByWithRelationInput_1 = require("../../../inputs/ProductOrderByWithRelationInput");
const ProductWhereInput_1 = require("../../../inputs/ProductWhereInput");
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
const ProductScalarFieldEnum_1 = require("../../../../enums/ProductScalarFieldEnum");
let StateProductArgs = class StateProductArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereInput_1.ProductWhereInput)
], StateProductArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], StateProductArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], StateProductArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateProductArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateProductArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductScalarFieldEnum_1.ProductScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], StateProductArgs.prototype, "distinct", void 0);
StateProductArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], StateProductArgs);
exports.StateProductArgs = StateProductArgs;
