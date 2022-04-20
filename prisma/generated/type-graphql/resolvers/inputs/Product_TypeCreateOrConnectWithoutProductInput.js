"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeCreateWithoutProductInput_1 = require("../inputs/Product_TypeCreateWithoutProductInput");
const Product_TypeWhereUniqueInput_1 = require("../inputs/Product_TypeWhereUniqueInput");
let Product_TypeCreateOrConnectWithoutProductInput = class Product_TypeCreateOrConnectWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput)
], Product_TypeCreateOrConnectWithoutProductInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateWithoutProductInput_1.Product_TypeCreateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateWithoutProductInput_1.Product_TypeCreateWithoutProductInput)
], Product_TypeCreateOrConnectWithoutProductInput.prototype, "create", void 0);
Product_TypeCreateOrConnectWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeCreateOrConnectWithoutProductInput", {
        isAbstract: true
    })
], Product_TypeCreateOrConnectWithoutProductInput);
exports.Product_TypeCreateOrConnectWithoutProductInput = Product_TypeCreateOrConnectWithoutProductInput;
