"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoUpdateWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductoUpdateWithoutInventarioInput = class ProductoUpdateWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductoUpdateWithoutInventarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductoUpdateWithoutInventarioInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductoUpdateWithoutInventarioInput.prototype, "foto", void 0);
ProductoUpdateWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoUpdateWithoutInventarioInput", {
        isAbstract: true
    })
], ProductoUpdateWithoutInventarioInput);
exports.ProductoUpdateWithoutInventarioInput = ProductoUpdateWithoutInventarioInput;
