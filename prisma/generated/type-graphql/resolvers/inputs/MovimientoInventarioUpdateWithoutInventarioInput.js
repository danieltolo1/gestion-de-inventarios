"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpdateWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_TipoMovimientoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_TipoMovimientoFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutMovimientosInput_1 = require("../inputs/UserUpdateOneWithoutMovimientosInput");
let MovimientoInventarioUpdateWithoutInventarioInput = class MovimientoInventarioUpdateWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovimientoInventarioUpdateWithoutInventarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], MovimientoInventarioUpdateWithoutInventarioInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_TipoMovimientoFieldUpdateOperationsInput_1.EnumEnum_TipoMovimientoFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_TipoMovimientoFieldUpdateOperationsInput_1.EnumEnum_TipoMovimientoFieldUpdateOperationsInput)
], MovimientoInventarioUpdateWithoutInventarioInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MovimientoInventarioUpdateWithoutInventarioInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutMovimientosInput_1.UserUpdateOneWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneWithoutMovimientosInput_1.UserUpdateOneWithoutMovimientosInput)
], MovimientoInventarioUpdateWithoutInventarioInput.prototype, "usuario", void 0);
MovimientoInventarioUpdateWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpdateWithoutInventarioInput", {
        isAbstract: true
    })
], MovimientoInventarioUpdateWithoutInventarioInput);
exports.MovimientoInventarioUpdateWithoutInventarioInput = MovimientoInventarioUpdateWithoutInventarioInput;
