"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UsuarioCountAggregate = class UsuarioCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioCountAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioCountAggregate.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UsuarioCountAggregate.prototype, "_all", void 0);
UsuarioCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("UsuarioCountAggregate", {
        isAbstract: true
    })
], UsuarioCountAggregate);
exports.UsuarioCountAggregate = UsuarioCountAggregate;
