"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoUpdateOneRequiredWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoCreateOrConnectWithoutInventarioInput_1 = require("../inputs/ProductoCreateOrConnectWithoutInventarioInput");
const ProductoCreateWithoutInventarioInput_1 = require("../inputs/ProductoCreateWithoutInventarioInput");
const ProductoUpdateWithoutInventarioInput_1 = require("../inputs/ProductoUpdateWithoutInventarioInput");
const ProductoUpsertWithoutInventarioInput_1 = require("../inputs/ProductoUpsertWithoutInventarioInput");
const ProductoWhereUniqueInput_1 = require("../inputs/ProductoWhereUniqueInput");
let ProductoUpdateOneRequiredWithoutInventarioInput = class ProductoUpdateOneRequiredWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCreateWithoutInventarioInput_1.ProductoCreateWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCreateWithoutInventarioInput_1.ProductoCreateWithoutInventarioInput)
], ProductoUpdateOneRequiredWithoutInventarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCreateOrConnectWithoutInventarioInput_1.ProductoCreateOrConnectWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCreateOrConnectWithoutInventarioInput_1.ProductoCreateOrConnectWithoutInventarioInput)
], ProductoUpdateOneRequiredWithoutInventarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoUpsertWithoutInventarioInput_1.ProductoUpsertWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoUpsertWithoutInventarioInput_1.ProductoUpsertWithoutInventarioInput)
], ProductoUpdateOneRequiredWithoutInventarioInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoWhereUniqueInput_1.ProductoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoWhereUniqueInput_1.ProductoWhereUniqueInput)
], ProductoUpdateOneRequiredWithoutInventarioInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoUpdateWithoutInventarioInput_1.ProductoUpdateWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoUpdateWithoutInventarioInput_1.ProductoUpdateWithoutInventarioInput)
], ProductoUpdateOneRequiredWithoutInventarioInput.prototype, "update", void 0);
ProductoUpdateOneRequiredWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoUpdateOneRequiredWithoutInventarioInput", {
        isAbstract: true
    })
], ProductoUpdateOneRequiredWithoutInventarioInput);
exports.ProductoUpdateOneRequiredWithoutInventarioInput = ProductoUpdateOneRequiredWithoutInventarioInput;
