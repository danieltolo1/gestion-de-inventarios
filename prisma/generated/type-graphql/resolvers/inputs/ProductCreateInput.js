"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateNestedOneWithoutProductInput_1 = require("../inputs/PartComputerCreateNestedOneWithoutProductInput");
const Product_TypeCreateNestedOneWithoutProductInput_1 = require("../inputs/Product_TypeCreateNestedOneWithoutProductInput");
const StateCreateNestedOneWithoutProductInput_1 = require("../inputs/StateCreateNestedOneWithoutProductInput");
let ProductCreateInput = class ProductCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateInput.prototype, "imei", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateNestedOneWithoutProductInput_1.Product_TypeCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateNestedOneWithoutProductInput_1.Product_TypeCreateNestedOneWithoutProductInput)
], ProductCreateInput.prototype, "product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateInput.prototype, "tecnology", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateInput.prototype, "conectivity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateNestedOneWithoutProductInput_1.StateCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateNestedOneWithoutProductInput_1.StateCreateNestedOneWithoutProductInput)
], ProductCreateInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateNestedOneWithoutProductInput_1.PartComputerCreateNestedOneWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateNestedOneWithoutProductInput_1.PartComputerCreateNestedOneWithoutProductInput)
], ProductCreateInput.prototype, "partcomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateInput.prototype, "historial", void 0);
ProductCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateInput", {
        isAbstract: true
    })
], ProductCreateInput);
exports.ProductCreateInput = ProductCreateInput;
