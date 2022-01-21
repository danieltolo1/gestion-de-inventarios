"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateNestedManyWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioCreateNestedManyWithoutUsuarioInput");
let UsuarioCreateInput = class UsuarioCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateInput.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateNestedManyWithoutUsuarioInput_1.MovimientoInventarioCreateNestedManyWithoutUsuarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateNestedManyWithoutUsuarioInput_1.MovimientoInventarioCreateNestedManyWithoutUsuarioInput)
], UsuarioCreateInput.prototype, "movimientos", void 0);
UsuarioCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateInput", {
        isAbstract: true
    })
], UsuarioCreateInput);
exports.UsuarioCreateInput = UsuarioCreateInput;
