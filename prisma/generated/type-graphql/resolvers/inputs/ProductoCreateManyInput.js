"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductoCreateManyInput = class ProductoCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCreateManyInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCreateManyInput.prototype, "foto", void 0);
ProductoCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoCreateManyInput", {
        isAbstract: true
    })
], ProductoCreateManyInput);
exports.ProductoCreateManyInput = ProductoCreateManyInput;
