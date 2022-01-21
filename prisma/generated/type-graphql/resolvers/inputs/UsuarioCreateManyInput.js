"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UsuarioCreateManyInput = class UsuarioCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateManyInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioCreateManyInput.prototype, "correo", void 0);
UsuarioCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateManyInput", {
        isAbstract: true
    })
], UsuarioCreateManyInput);
exports.UsuarioCreateManyInput = UsuarioCreateManyInput;
