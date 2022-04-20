"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Product_TypeWhereUniqueInput = class Product_TypeWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product_TypeWhereUniqueInput.prototype, "id_product_type", void 0);
Product_TypeWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeWhereUniqueInput", {
        isAbstract: true
    })
], Product_TypeWhereUniqueInput);
exports.Product_TypeWhereUniqueInput = Product_TypeWhereUniqueInput;
