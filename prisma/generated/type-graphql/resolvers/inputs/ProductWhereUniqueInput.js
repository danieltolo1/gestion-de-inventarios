"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductWhereUniqueInput = class ProductWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductWhereUniqueInput.prototype, "id_product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductWhereUniqueInput.prototype, "internal_code", void 0);
ProductWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductWhereUniqueInput", {
        isAbstract: true
    })
], ProductWhereUniqueInput);
exports.ProductWhereUniqueInput = ProductWhereUniqueInput;
