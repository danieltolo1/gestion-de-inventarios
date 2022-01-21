"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateOrConnectWithoutMovimientosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateWithoutMovimientosInput_1 = require("../inputs/UsuarioCreateWithoutMovimientosInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateOrConnectWithoutMovimientosInput = class UsuarioCreateOrConnectWithoutMovimientosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateOrConnectWithoutMovimientosInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutMovimientosInput_1.UsuarioCreateWithoutMovimientosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutMovimientosInput_1.UsuarioCreateWithoutMovimientosInput)
], UsuarioCreateOrConnectWithoutMovimientosInput.prototype, "create", void 0);
UsuarioCreateOrConnectWithoutMovimientosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutMovimientosInput", {
        isAbstract: true
    })
], UsuarioCreateOrConnectWithoutMovimientosInput);
exports.UsuarioCreateOrConnectWithoutMovimientosInput = UsuarioCreateOrConnectWithoutMovimientosInput;
