"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UsuarioWhereUniqueInput = class UsuarioWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioWhereUniqueInput.prototype, "correo", void 0);
UsuarioWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioWhereUniqueInput", {
        isAbstract: true
    })
], UsuarioWhereUniqueInput);
exports.UsuarioWhereUniqueInput = UsuarioWhereUniqueInput;
