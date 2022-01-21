"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioOrderByWithRelationInput_1 = require("../../../inputs/UsuarioOrderByWithRelationInput");
const UsuarioWhereInput_1 = require("../../../inputs/UsuarioWhereInput");
const UsuarioWhereUniqueInput_1 = require("../../../inputs/UsuarioWhereUniqueInput");
const UsuarioScalarFieldEnum_1 = require("../../../../enums/UsuarioScalarFieldEnum");
let FindFirstUsuarioArgs = class FindFirstUsuarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereInput_1.UsuarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereInput_1.UsuarioWhereInput)
], FindFirstUsuarioArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstUsuarioArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], FindFirstUsuarioArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstUsuarioArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstUsuarioArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UsuarioScalarFieldEnum_1.UsuarioScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstUsuarioArgs.prototype, "distinct", void 0);
FindFirstUsuarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstUsuarioArgs);
exports.FindFirstUsuarioArgs = FindFirstUsuarioArgs;
