"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeCreateNestedOneWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeCreateOrConnectWithoutProductInput_1 = require("../inputs/Product_TypeCreateOrConnectWithoutProductInput");
const Product_TypeCreateWithoutProductInput_1 = require("../inputs/Product_TypeCreateWithoutProductInput");
const Product_TypeWhereUniqueInput_1 = require("../inputs/Product_TypeWhereUniqueInput");
let Product_TypeCreateNestedOneWithoutProductInput = class Product_TypeCreateNestedOneWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateWithoutProductInput_1.Product_TypeCreateWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateWithoutProductInput_1.Product_TypeCreateWithoutProductInput)
], Product_TypeCreateNestedOneWithoutProductInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateOrConnectWithoutProductInput_1.Product_TypeCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateOrConnectWithoutProductInput_1.Product_TypeCreateOrConnectWithoutProductInput)
], Product_TypeCreateNestedOneWithoutProductInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput)
], Product_TypeCreateNestedOneWithoutProductInput.prototype, "connect", void 0);
Product_TypeCreateNestedOneWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeCreateNestedOneWithoutProductInput", {
        isAbstract: true
    })
], Product_TypeCreateNestedOneWithoutProductInput);
exports.Product_TypeCreateNestedOneWithoutProductInput = Product_TypeCreateNestedOneWithoutProductInput;
