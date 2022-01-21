"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateNestedOneWithoutMovimientosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateOrConnectWithoutMovimientosInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutMovimientosInput");
const UsuarioCreateWithoutMovimientosInput_1 = require("../inputs/UsuarioCreateWithoutMovimientosInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateNestedOneWithoutMovimientosInput = class UsuarioCreateNestedOneWithoutMovimientosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutMovimientosInput_1.UsuarioCreateWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutMovimientosInput_1.UsuarioCreateWithoutMovimientosInput)
], UsuarioCreateNestedOneWithoutMovimientosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutMovimientosInput_1.UsuarioCreateOrConnectWithoutMovimientosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateOrConnectWithoutMovimientosInput_1.UsuarioCreateOrConnectWithoutMovimientosInput)
], UsuarioCreateNestedOneWithoutMovimientosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateNestedOneWithoutMovimientosInput.prototype, "connect", void 0);
UsuarioCreateNestedOneWithoutMovimientosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutMovimientosInput", {
        isAbstract: true
    })
], UsuarioCreateNestedOneWithoutMovimientosInput);
exports.UsuarioCreateNestedOneWithoutMovimientosInput = UsuarioCreateNestedOneWithoutMovimientosInput;
