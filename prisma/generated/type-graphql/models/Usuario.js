"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCount_1 = require("../resolvers/outputs/UsuarioCount");
let Usuario = class Usuario {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Usuario.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Usuario.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Usuario.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCount_1.UsuarioCount, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCount_1.UsuarioCount)
], Usuario.prototype, "_count", void 0);
Usuario = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Usuario", {
        isAbstract: true
    })
], Usuario);
exports.Usuario = Usuario;
