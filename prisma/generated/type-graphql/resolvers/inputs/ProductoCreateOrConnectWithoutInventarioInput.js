"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoCreateOrConnectWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoCreateWithoutInventarioInput_1 = require("../inputs/ProductoCreateWithoutInventarioInput");
const ProductoWhereUniqueInput_1 = require("../inputs/ProductoWhereUniqueInput");
let ProductoCreateOrConnectWithoutInventarioInput = class ProductoCreateOrConnectWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereUniqueInput_1.ProductoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereUniqueInput_1.ProductoWhereUniqueInput)
], ProductoCreateOrConnectWithoutInventarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCreateWithoutInventarioInput_1.ProductoCreateWithoutInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCreateWithoutInventarioInput_1.ProductoCreateWithoutInventarioInput)
], ProductoCreateOrConnectWithoutInventarioInput.prototype, "create", void 0);
ProductoCreateOrConnectWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoCreateOrConnectWithoutInventarioInput", {
        isAbstract: true
    })
], ProductoCreateOrConnectWithoutInventarioInput);
exports.ProductoCreateOrConnectWithoutInventarioInput = ProductoCreateOrConnectWithoutInventarioInput;
