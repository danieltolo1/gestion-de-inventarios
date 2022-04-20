"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutProduct_typeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateWithoutProduct_typeInput_1 = require("../inputs/ProductCreateWithoutProduct_typeInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutProduct_typeInput = class ProductCreateOrConnectWithoutProduct_typeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutProduct_typeInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutProduct_typeInput_1.ProductCreateWithoutProduct_typeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutProduct_typeInput_1.ProductCreateWithoutProduct_typeInput)
], ProductCreateOrConnectWithoutProduct_typeInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutProduct_typeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutProduct_typeInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutProduct_typeInput);
exports.ProductCreateOrConnectWithoutProduct_typeInput = ProductCreateOrConnectWithoutProduct_typeInput;
