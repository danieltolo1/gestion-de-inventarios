"use strict";
var ProductoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioRelationFilter_1 = require("../inputs/InventarioRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ProductoWhereInput = ProductoWhereInput_1 = class ProductoWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductoWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductoWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductoWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductoWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ProductoWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ProductoWhereInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ProductoWhereInput.prototype, "foto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioRelationFilter_1.InventarioRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioRelationFilter_1.InventarioRelationFilter)
], ProductoWhereInput.prototype, "inventario", void 0);
ProductoWhereInput = ProductoWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoWhereInput", {
        isAbstract: true
    })
], ProductoWhereInput);
exports.ProductoWhereInput = ProductoWhereInput;
