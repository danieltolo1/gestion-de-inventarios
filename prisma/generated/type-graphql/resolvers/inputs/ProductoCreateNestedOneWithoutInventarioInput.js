"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoCreateNestedOneWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoCreateOrConnectWithoutInventarioInput_1 = require("../inputs/ProductoCreateOrConnectWithoutInventarioInput");
const ProductoCreateWithoutInventarioInput_1 = require("../inputs/ProductoCreateWithoutInventarioInput");
const ProductoWhereUniqueInput_1 = require("../inputs/ProductoWhereUniqueInput");
let ProductoCreateNestedOneWithoutInventarioInput = class ProductoCreateNestedOneWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCreateWithoutInventarioInput_1.ProductoCreateWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCreateWithoutInventarioInput_1.ProductoCreateWithoutInventarioInput)
], ProductoCreateNestedOneWithoutInventarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCreateOrConnectWithoutInventarioInput_1.ProductoCreateOrConnectWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCreateOrConnectWithoutInventarioInput_1.ProductoCreateOrConnectWithoutInventarioInput)
], ProductoCreateNestedOneWithoutInventarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereUniqueInput_1.ProductoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereUniqueInput_1.ProductoWhereUniqueInput)
], ProductoCreateNestedOneWithoutInventarioInput.prototype, "connect", void 0);
ProductoCreateNestedOneWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoCreateNestedOneWithoutInventarioInput", {
        isAbstract: true
    })
], ProductoCreateNestedOneWithoutInventarioInput);
exports.ProductoCreateNestedOneWithoutInventarioInput = ProductoCreateNestedOneWithoutInventarioInput;
