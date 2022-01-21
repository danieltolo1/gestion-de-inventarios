"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpdateWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_TipoMovimientoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_TipoMovimientoFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const InventarioUpdateOneRequiredWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioUpdateOneRequiredWithoutMovimientoInventarioInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MovimientoInventarioUpdateWithoutUsuarioInput = class MovimientoInventarioUpdateWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovimientoInventarioUpdateWithoutUsuarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], MovimientoInventarioUpdateWithoutUsuarioInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_TipoMovimientoFieldUpdateOperationsInput_1.EnumEnum_TipoMovimientoFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_TipoMovimientoFieldUpdateOperationsInput_1.EnumEnum_TipoMovimientoFieldUpdateOperationsInput)
], MovimientoInventarioUpdateWithoutUsuarioInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MovimientoInventarioUpdateWithoutUsuarioInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpdateOneRequiredWithoutMovimientoInventarioInput_1.InventarioUpdateOneRequiredWithoutMovimientoInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpdateOneRequiredWithoutMovimientoInventarioInput_1.InventarioUpdateOneRequiredWithoutMovimientoInventarioInput)
], MovimientoInventarioUpdateWithoutUsuarioInput.prototype, "inventario", void 0);
MovimientoInventarioUpdateWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpdateWithoutUsuarioInput", {
        isAbstract: true
    })
], MovimientoInventarioUpdateWithoutUsuarioInput);
exports.MovimientoInventarioUpdateWithoutUsuarioInput = MovimientoInventarioUpdateWithoutUsuarioInput;
