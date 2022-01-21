"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_TipoMovimientoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_TipoMovimientoFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const InventarioUpdateOneRequiredWithoutMovimientoInventarioInput_1 = require("../inputs/InventarioUpdateOneRequiredWithoutMovimientoInventarioInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneWithoutMovimientosInput_1 = require("../inputs/UsuarioUpdateOneWithoutMovimientosInput");
let MovimientoInventarioUpdateInput = class MovimientoInventarioUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovimientoInventarioUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], MovimientoInventarioUpdateInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_TipoMovimientoFieldUpdateOperationsInput_1.EnumEnum_TipoMovimientoFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_TipoMovimientoFieldUpdateOperationsInput_1.EnumEnum_TipoMovimientoFieldUpdateOperationsInput)
], MovimientoInventarioUpdateInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MovimientoInventarioUpdateInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpdateOneRequiredWithoutMovimientoInventarioInput_1.InventarioUpdateOneRequiredWithoutMovimientoInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpdateOneRequiredWithoutMovimientoInventarioInput_1.InventarioUpdateOneRequiredWithoutMovimientoInventarioInput)
], MovimientoInventarioUpdateInput.prototype, "inventario", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpdateOneWithoutMovimientosInput_1.UsuarioUpdateOneWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpdateOneWithoutMovimientosInput_1.UsuarioUpdateOneWithoutMovimientosInput)
], MovimientoInventarioUpdateInput.prototype, "usuario", void 0);
MovimientoInventarioUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpdateInput", {
        isAbstract: true
    })
], MovimientoInventarioUpdateInput);
exports.MovimientoInventarioUpdateInput = MovimientoInventarioUpdateInput;
