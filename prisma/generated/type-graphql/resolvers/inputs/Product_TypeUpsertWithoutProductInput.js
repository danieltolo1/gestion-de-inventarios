"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeUpsertWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeCreateWithoutProductInput_1 = require("../inputs/Product_TypeCreateWithoutProductInput");
const Product_TypeUpdateWithoutProductInput_1 = require("../inputs/Product_TypeUpdateWithoutProductInput");
let Product_TypeUpsertWithoutProductInput = class Product_TypeUpsertWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeUpdateWithoutProductInput_1.Product_TypeUpdateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeUpdateWithoutProductInput_1.Product_TypeUpdateWithoutProductInput)
], Product_TypeUpsertWithoutProductInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateWithoutProductInput_1.Product_TypeCreateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateWithoutProductInput_1.Product_TypeCreateWithoutProductInput)
], Product_TypeUpsertWithoutProductInput.prototype, "create", void 0);
Product_TypeUpsertWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeUpsertWithoutProductInput", {
        isAbstract: true
    })
], Product_TypeUpsertWithoutProductInput);
exports.Product_TypeUpsertWithoutProductInput = Product_TypeUpsertWithoutProductInput;
