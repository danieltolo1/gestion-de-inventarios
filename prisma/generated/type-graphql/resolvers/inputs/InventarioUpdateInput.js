"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const MovimientoInventarioUpdateManyWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioUpdateManyWithoutInventarioInput");
const ProductoUpdateOneRequiredWithoutInventarioInput_1 = require("../inputs/ProductoUpdateOneRequiredWithoutInventarioInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let InventarioUpdateInput = class InventarioUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InventarioUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], InventarioUpdateInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoUpdateOneRequiredWithoutInventarioInput_1.ProductoUpdateOneRequiredWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductoUpdateOneRequiredWithoutInventarioInput_1.ProductoUpdateOneRequiredWithoutInventarioInput)
], InventarioUpdateInput.prototype, "producto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateManyWithoutInventarioInput_1.MovimientoInventarioUpdateManyWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateManyWithoutInventarioInput_1.MovimientoInventarioUpdateManyWithoutInventarioInput)
], InventarioUpdateInput.prototype, "movimientoInventario", void 0);
InventarioUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioUpdateInput", {
        isAbstract: true
    })
], InventarioUpdateInput);
exports.InventarioUpdateInput = InventarioUpdateInput;
