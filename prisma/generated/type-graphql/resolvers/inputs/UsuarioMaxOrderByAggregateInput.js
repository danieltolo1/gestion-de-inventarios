"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UsuarioMaxOrderByAggregateInput = class UsuarioMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMaxOrderByAggregateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMaxOrderByAggregateInput.prototype, "correo", void 0);
UsuarioMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioMaxOrderByAggregateInput", {
        isAbstract: true
    })
], UsuarioMaxOrderByAggregateInput);
exports.UsuarioMaxOrderByAggregateInput = UsuarioMaxOrderByAggregateInput;
