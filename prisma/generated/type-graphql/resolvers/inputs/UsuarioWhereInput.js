"use strict";
var UsuarioWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioListRelationFilter_1 = require("../inputs/MovimientoInventarioListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let UsuarioWhereInput = UsuarioWhereInput_1 = class UsuarioWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UsuarioWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UsuarioWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UsuarioWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioListRelationFilter_1.MovimientoInventarioListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioListRelationFilter_1.MovimientoInventarioListRelationFilter)
], UsuarioWhereInput.prototype, "movimientos", void 0);
UsuarioWhereInput = UsuarioWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioWhereInput", {
        isAbstract: true
    })
], UsuarioWhereInput);
exports.UsuarioWhereInput = UsuarioWhereInput;
