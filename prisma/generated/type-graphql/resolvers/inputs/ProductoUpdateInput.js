"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioUpdateOneWithoutProductoInput_1 = require("../inputs/InventarioUpdateOneWithoutProductoInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductoUpdateInput = class ProductoUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductoUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductoUpdateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductoUpdateInput.prototype, "foto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpdateOneWithoutProductoInput_1.InventarioUpdateOneWithoutProductoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpdateOneWithoutProductoInput_1.InventarioUpdateOneWithoutProductoInput)
], ProductoUpdateInput.prototype, "inventario", void 0);
ProductoUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoUpdateInput", {
        isAbstract: true
    })
], ProductoUpdateInput);
exports.ProductoUpdateInput = ProductoUpdateInput;
