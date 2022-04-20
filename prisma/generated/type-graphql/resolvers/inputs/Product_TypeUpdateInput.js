"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductUpdateManyWithoutProduct_typeInput_1 = require("../inputs/ProductUpdateManyWithoutProduct_typeInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Product_TypeUpdateInput = class Product_TypeUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutProduct_typeInput_1.ProductUpdateManyWithoutProduct_typeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateManyWithoutProduct_typeInput_1.ProductUpdateManyWithoutProduct_typeInput)
], Product_TypeUpdateInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Product_TypeUpdateInput.prototype, "description", void 0);
Product_TypeUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeUpdateInput", {
        isAbstract: true
    })
], Product_TypeUpdateInput);
exports.Product_TypeUpdateInput = Product_TypeUpdateInput;
