"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioUpdateWithoutProductoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const MovimientoInventarioUpdateManyWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioUpdateManyWithoutInventarioInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let InventarioUpdateWithoutProductoInput = class InventarioUpdateWithoutProductoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InventarioUpdateWithoutProductoInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], InventarioUpdateWithoutProductoInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateManyWithoutInventarioInput_1.MovimientoInventarioUpdateManyWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateManyWithoutInventarioInput_1.MovimientoInventarioUpdateManyWithoutInventarioInput)
], InventarioUpdateWithoutProductoInput.prototype, "movimientoInventario", void 0);
InventarioUpdateWithoutProductoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioUpdateWithoutProductoInput", {
        isAbstract: true
    })
], InventarioUpdateWithoutProductoInput);
exports.InventarioUpdateWithoutProductoInput = InventarioUpdateWithoutProductoInput;
