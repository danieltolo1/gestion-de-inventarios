"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateWithoutMovimientosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UsuarioUpdateWithoutMovimientosInput = class UsuarioUpdateWithoutMovimientosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutMovimientosInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutMovimientosInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutMovimientosInput.prototype, "correo", void 0);
UsuarioUpdateWithoutMovimientosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpdateWithoutMovimientosInput", {
        isAbstract: true
    })
], UsuarioUpdateWithoutMovimientosInput);
exports.UsuarioUpdateWithoutMovimientosInput = UsuarioUpdateWithoutMovimientosInput;
