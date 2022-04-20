"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeUpdateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Product_TypeUpdateWithoutProductInput = class Product_TypeUpdateWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Product_TypeUpdateWithoutProductInput.prototype, "description", void 0);
Product_TypeUpdateWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeUpdateWithoutProductInput", {
        isAbstract: true
    })
], Product_TypeUpdateWithoutProductInput);
exports.Product_TypeUpdateWithoutProductInput = Product_TypeUpdateWithoutProductInput;
