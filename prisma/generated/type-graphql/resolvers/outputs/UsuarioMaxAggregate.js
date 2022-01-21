"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UsuarioMaxAggregate = class UsuarioMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMaxAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMaxAggregate.prototype, "correo", void 0);
UsuarioMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("UsuarioMaxAggregate", {
        isAbstract: true
    })
], UsuarioMaxAggregate);
exports.UsuarioMaxAggregate = UsuarioMaxAggregate;
