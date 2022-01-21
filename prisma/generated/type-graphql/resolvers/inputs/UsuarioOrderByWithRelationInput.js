"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioOrderByRelationAggregateInput_1 = require("../inputs/MovimientoInventarioOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UsuarioOrderByWithRelationInput = class UsuarioOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioOrderByRelationAggregateInput_1.MovimientoInventarioOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioOrderByRelationAggregateInput_1.MovimientoInventarioOrderByRelationAggregateInput)
], UsuarioOrderByWithRelationInput.prototype, "movimientos", void 0);
UsuarioOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioOrderByWithRelationInput", {
        isAbstract: true
    })
], UsuarioOrderByWithRelationInput);
exports.UsuarioOrderByWithRelationInput = UsuarioOrderByWithRelationInput;
