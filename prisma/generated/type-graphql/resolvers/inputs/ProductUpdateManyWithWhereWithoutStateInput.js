"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithWhereWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyMutationInput_1 = require("../inputs/ProductUpdateManyMutationInput");
let ProductUpdateManyWithWhereWithoutStateInput = class ProductUpdateManyWithWhereWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductScalarWhereInput_1.ProductScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductScalarWhereInput_1.ProductScalarWhereInput)
], ProductUpdateManyWithWhereWithoutStateInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput)
], ProductUpdateManyWithWhereWithoutStateInput.prototype, "data", void 0);
ProductUpdateManyWithWhereWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateManyWithWhereWithoutStateInput", {
        isAbstract: true
    })
], ProductUpdateManyWithWhereWithoutStateInput);
exports.ProductUpdateManyWithWhereWithoutStateInput = ProductUpdateManyWithWhereWithoutStateInput;
