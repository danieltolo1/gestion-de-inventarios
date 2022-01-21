"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UsuarioMinOrderByAggregateInput = class UsuarioMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMinOrderByAggregateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMinOrderByAggregateInput.prototype, "correo", void 0);
UsuarioMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioMinOrderByAggregateInput", {
        isAbstract: true
    })
], UsuarioMinOrderByAggregateInput);
exports.UsuarioMinOrderByAggregateInput = UsuarioMinOrderByAggregateInput;
