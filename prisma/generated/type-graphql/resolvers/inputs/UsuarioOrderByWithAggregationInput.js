"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCountOrderByAggregateInput_1 = require("../inputs/UsuarioCountOrderByAggregateInput");
const UsuarioMaxOrderByAggregateInput_1 = require("../inputs/UsuarioMaxOrderByAggregateInput");
const UsuarioMinOrderByAggregateInput_1 = require("../inputs/UsuarioMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UsuarioOrderByWithAggregationInput = class UsuarioOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithAggregationInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithAggregationInput.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCountOrderByAggregateInput_1.UsuarioCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCountOrderByAggregateInput_1.UsuarioCountOrderByAggregateInput)
], UsuarioOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioMaxOrderByAggregateInput_1.UsuarioMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioMaxOrderByAggregateInput_1.UsuarioMaxOrderByAggregateInput)
], UsuarioOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioMinOrderByAggregateInput_1.UsuarioMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioMinOrderByAggregateInput_1.UsuarioMinOrderByAggregateInput)
], UsuarioOrderByWithAggregationInput.prototype, "_min", void 0);
UsuarioOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioOrderByWithAggregationInput", {
        isAbstract: true
    })
], UsuarioOrderByWithAggregationInput);
exports.UsuarioOrderByWithAggregationInput = UsuarioOrderByWithAggregationInput;
