"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCountAggregate_1 = require("../outputs/UsuarioCountAggregate");
const UsuarioMaxAggregate_1 = require("../outputs/UsuarioMaxAggregate");
const UsuarioMinAggregate_1 = require("../outputs/UsuarioMinAggregate");
let UsuarioGroupBy = class UsuarioGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioGroupBy.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioGroupBy.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCountAggregate_1.UsuarioCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCountAggregate_1.UsuarioCountAggregate)
], UsuarioGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioMinAggregate_1.UsuarioMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioMinAggregate_1.UsuarioMinAggregate)
], UsuarioGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioMaxAggregate_1.UsuarioMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioMaxAggregate_1.UsuarioMaxAggregate)
], UsuarioGroupBy.prototype, "_max", void 0);
UsuarioGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("UsuarioGroupBy", {
        isAbstract: true
    })
], UsuarioGroupBy);
exports.UsuarioGroupBy = UsuarioGroupBy;
