"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithWhereWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyMutationInput_1 = require("../inputs/ProductUpdateManyMutationInput");
let ProductUpdateManyWithWhereWithoutLocationInput = class ProductUpdateManyWithWhereWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductScalarWhereInput_1.ProductScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductScalarWhereInput_1.ProductScalarWhereInput)
], ProductUpdateManyWithWhereWithoutLocationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput)
], ProductUpdateManyWithWhereWithoutLocationInput.prototype, "data", void 0);
ProductUpdateManyWithWhereWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateManyWithWhereWithoutLocationInput", {
        isAbstract: true
    })
], ProductUpdateManyWithWhereWithoutLocationInput);
exports.ProductUpdateManyWithWhereWithoutLocationInput = ProductUpdateManyWithWhereWithoutLocationInput;
