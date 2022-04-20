"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PartComputerUpdateOneWithoutProductInput_1 = require("../inputs/PartComputerUpdateOneWithoutProductInput");
const Product_TypeUpdateOneRequiredWithoutProductInput_1 = require("../inputs/Product_TypeUpdateOneRequiredWithoutProductInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductUpdateWithoutStateInput = class ProductUpdateWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutStateInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutStateInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutStateInput.prototype, "imei", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutStateInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutStateInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutStateInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeUpdateOneRequiredWithoutProductInput_1.Product_TypeUpdateOneRequiredWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeUpdateOneRequiredWithoutProductInput_1.Product_TypeUpdateOneRequiredWithoutProductInput)
], ProductUpdateWithoutStateInput.prototype, "product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutStateInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutStateInput.prototype, "tecnology", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutStateInput.prototype, "conectivity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateOneWithoutProductInput_1.PartComputerUpdateOneWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateOneWithoutProductInput_1.PartComputerUpdateOneWithoutProductInput)
], ProductUpdateWithoutStateInput.prototype, "partcomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutStateInput.prototype, "historial", void 0);
ProductUpdateWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateWithoutStateInput", {
        isAbstract: true
    })
], ProductUpdateWithoutStateInput);
exports.ProductUpdateWithoutStateInput = ProductUpdateWithoutStateInput;
