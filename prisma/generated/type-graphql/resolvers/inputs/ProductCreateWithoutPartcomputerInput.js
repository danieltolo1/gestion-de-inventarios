"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutPartcomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeCreateNestedOneWithoutProductInput_1 = require("../inputs/Product_TypeCreateNestedOneWithoutProductInput");
const StateCreateNestedOneWithoutProductInput_1 = require("../inputs/StateCreateNestedOneWithoutProductInput");
let ProductCreateWithoutPartcomputerInput = class ProductCreateWithoutPartcomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutPartcomputerInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutPartcomputerInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutPartcomputerInput.prototype, "imei", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutPartcomputerInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutPartcomputerInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutPartcomputerInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateNestedOneWithoutProductInput_1.Product_TypeCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateNestedOneWithoutProductInput_1.Product_TypeCreateNestedOneWithoutProductInput)
], ProductCreateWithoutPartcomputerInput.prototype, "product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutPartcomputerInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutPartcomputerInput.prototype, "tecnology", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutPartcomputerInput.prototype, "conectivity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateNestedOneWithoutProductInput_1.StateCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateNestedOneWithoutProductInput_1.StateCreateNestedOneWithoutProductInput)
], ProductCreateWithoutPartcomputerInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutPartcomputerInput.prototype, "historial", void 0);
ProductCreateWithoutPartcomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateWithoutPartcomputerInput", {
        isAbstract: true
    })
], ProductCreateWithoutPartcomputerInput);
exports.ProductCreateWithoutPartcomputerInput = ProductCreateWithoutPartcomputerInput;
