"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductoWhereUniqueInput = class ProductoWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoWhereUniqueInput.prototype, "id", void 0);
ProductoWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoWhereUniqueInput", {
        isAbstract: true
    })
], ProductoWhereUniqueInput);
exports.ProductoWhereUniqueInput = ProductoWhereUniqueInput;
