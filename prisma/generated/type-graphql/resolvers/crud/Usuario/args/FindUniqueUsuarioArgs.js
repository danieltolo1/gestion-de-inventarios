"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioWhereUniqueInput_1 = require("../../../inputs/UsuarioWhereUniqueInput");
let FindUniqueUsuarioArgs = class FindUniqueUsuarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], FindUniqueUsuarioArgs.prototype, "where", void 0);
FindUniqueUsuarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueUsuarioArgs);
exports.FindUniqueUsuarioArgs = FindUniqueUsuarioArgs;
