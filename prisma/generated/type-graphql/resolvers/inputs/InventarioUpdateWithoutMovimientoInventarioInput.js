"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioUpdateWithoutMovimientoInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ProductoUpdateOneRequiredWithoutInventarioInput_1 = require("../inputs/ProductoUpdateOneRequiredWithoutInventarioInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let InventarioUpdateWithoutMovimientoInventarioInput = class InventarioUpdateWithoutMovimientoInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InventarioUpdateWithoutMovimientoInventarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], InventarioUpdateWithoutMovimientoInventarioInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoUpdateOneRequiredWithoutInventarioInput_1.ProductoUpdateOneRequiredWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoUpdateOneRequiredWithoutInventarioInput_1.ProductoUpdateOneRequiredWithoutInventarioInput)
], InventarioUpdateWithoutMovimientoInventarioInput.prototype, "producto", void 0);
InventarioUpdateWithoutMovimientoInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioUpdateWithoutMovimientoInventarioInput", {
        isAbstract: true
    })
], InventarioUpdateWithoutMovimientoInventarioInput);
exports.InventarioUpdateWithoutMovimientoInventarioInput = InventarioUpdateWithoutMovimientoInventarioInput;
