"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Product_TypeCreateManyInput = class Product_TypeCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeCreateManyInput.prototype, "id_product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Product_TypeCreateManyInput.prototype, "description", void 0);
Product_TypeCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeCreateManyInput", {
        isAbstract: true
    })
], Product_TypeCreateManyInput);
exports.Product_TypeCreateManyInput = Product_TypeCreateManyInput;
