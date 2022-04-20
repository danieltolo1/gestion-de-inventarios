"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithWhereWithoutProduct_typeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyMutationInput_1 = require("../inputs/ProductUpdateManyMutationInput");
let ProductUpdateManyWithWhereWithoutProduct_typeInput = class ProductUpdateManyWithWhereWithoutProduct_typeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductScalarWhereInput_1.ProductScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductScalarWhereInput_1.ProductScalarWhereInput)
], ProductUpdateManyWithWhereWithoutProduct_typeInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput)
], ProductUpdateManyWithWhereWithoutProduct_typeInput.prototype, "data", void 0);
ProductUpdateManyWithWhereWithoutProduct_typeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateManyWithWhereWithoutProduct_typeInput", {
        isAbstract: true
    })
], ProductUpdateManyWithWhereWithoutProduct_typeInput);
exports.ProductUpdateManyWithWhereWithoutProduct_typeInput = ProductUpdateManyWithWhereWithoutProduct_typeInput;
