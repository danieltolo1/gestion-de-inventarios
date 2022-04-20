"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateNestedManyWithoutProduct_typeInput_1 = require("../inputs/ProductCreateNestedManyWithoutProduct_typeInput");
let Product_TypeCreateInput = class Product_TypeCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutProduct_typeInput_1.ProductCreateNestedManyWithoutProduct_typeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedManyWithoutProduct_typeInput_1.ProductCreateNestedManyWithoutProduct_typeInput)
], Product_TypeCreateInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeCreateInput.prototype, "description", void 0);
Product_TypeCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeCreateInput", {
        isAbstract: true
    })
], Product_TypeCreateInput);
exports.Product_TypeCreateInput = Product_TypeCreateInput;
