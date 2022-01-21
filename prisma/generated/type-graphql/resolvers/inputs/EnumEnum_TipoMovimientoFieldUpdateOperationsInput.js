"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_TipoMovimientoFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_TipoMovimiento_1 = require("../../enums/Enum_TipoMovimiento");
let EnumEnum_TipoMovimientoFieldUpdateOperationsInput = class EnumEnum_TipoMovimientoFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoMovimiento_1.Enum_TipoMovimiento, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_TipoMovimientoFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_TipoMovimientoFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_TipoMovimientoFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_TipoMovimientoFieldUpdateOperationsInput);
exports.EnumEnum_TipoMovimientoFieldUpdateOperationsInput = EnumEnum_TipoMovimientoFieldUpdateOperationsInput;
