"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UsuarioCountOrderByAggregateInput = class UsuarioCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCountOrderByAggregateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCountOrderByAggregateInput.prototype, "correo", void 0);
UsuarioCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCountOrderByAggregateInput", {
        isAbstract: true
    })
], UsuarioCountOrderByAggregateInput);
exports.UsuarioCountOrderByAggregateInput = UsuarioCountOrderByAggregateInput;
