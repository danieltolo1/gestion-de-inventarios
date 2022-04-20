"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Product_TypeUpdateManyMutationInput = class Product_TypeUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Product_TypeUpdateManyMutationInput.prototype, "description", void 0);
Product_TypeUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeUpdateManyMutationInput", {
        isAbstract: true
    })
], Product_TypeUpdateManyMutationInput);
exports.Product_TypeUpdateManyMutationInput = Product_TypeUpdateManyMutationInput;
