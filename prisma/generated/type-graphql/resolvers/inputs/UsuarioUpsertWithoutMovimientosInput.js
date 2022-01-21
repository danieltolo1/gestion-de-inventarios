"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpsertWithoutMovimientosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateWithoutMovimientosInput_1 = require("../inputs/UsuarioCreateWithoutMovimientosInput");
const UsuarioUpdateWithoutMovimientosInput_1 = require("../inputs/UsuarioUpdateWithoutMovimientosInput");
let UsuarioUpsertWithoutMovimientosInput = class UsuarioUpsertWithoutMovimientosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutMovimientosInput_1.UsuarioUpdateWithoutMovimientosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioUpdateWithoutMovimientosInput_1.UsuarioUpdateWithoutMovimientosInput)
], UsuarioUpsertWithoutMovimientosInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutMovimientosInput_1.UsuarioCreateWithoutMovimientosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutMovimientosInput_1.UsuarioCreateWithoutMovimientosInput)
], UsuarioUpsertWithoutMovimientosInput.prototype, "create", void 0);
UsuarioUpsertWithoutMovimientosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpsertWithoutMovimientosInput", {
        isAbstract: true
    })
], UsuarioUpsertWithoutMovimientosInput);
exports.UsuarioUpsertWithoutMovimientosInput = UsuarioUpsertWithoutMovimientosInput;
