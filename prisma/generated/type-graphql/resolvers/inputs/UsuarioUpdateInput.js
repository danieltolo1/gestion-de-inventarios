"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioUpdateManyWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioUpdateManyWithoutUsuarioInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UsuarioUpdateInput = class UsuarioUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateInput.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateManyWithoutUsuarioInput_1.MovimientoInventarioUpdateManyWithoutUsuarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateManyWithoutUsuarioInput_1.MovimientoInventarioUpdateManyWithoutUsuarioInput)
], UsuarioUpdateInput.prototype, "movimientos", void 0);
UsuarioUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpdateInput", {
        isAbstract: true
    })
], UsuarioUpdateInput);
exports.UsuarioUpdateInput = UsuarioUpdateInput;
