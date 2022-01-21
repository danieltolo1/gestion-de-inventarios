"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UsuarioMinAggregate = class UsuarioMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMinAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioMinAggregate.prototype, "correo", void 0);
UsuarioMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("UsuarioMinAggregate", {
        isAbstract: true
    })
], UsuarioMinAggregate);
exports.UsuarioMinAggregate = UsuarioMinAggregate;
