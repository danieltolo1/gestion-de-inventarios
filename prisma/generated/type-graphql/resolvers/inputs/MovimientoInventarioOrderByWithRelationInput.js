"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioOrderByWithRelationInput_1 = require("../inputs/InventarioOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MovimientoInventarioOrderByWithRelationInput = class MovimientoInventarioOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioOrderByWithRelationInput_1.InventarioOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioOrderByWithRelationInput_1.InventarioOrderByWithRelationInput)
], MovimientoInventarioOrderByWithRelationInput.prototype, "inventario", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithRelationInput.prototype, "inventarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithRelationInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithRelationInput.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithRelationInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], MovimientoInventarioOrderByWithRelationInput.prototype, "usuario", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioOrderByWithRelationInput.prototype, "usuarioId", void 0);
MovimientoInventarioOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioOrderByWithRelationInput", {
        isAbstract: true
    })
], MovimientoInventarioOrderByWithRelationInput);
exports.MovimientoInventarioOrderByWithRelationInput = MovimientoInventarioOrderByWithRelationInput;
