"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCreateOrConnectWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioCreateWithoutUsuarioInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../inputs/MovimientoInventarioWhereUniqueInput");
let MovimientoInventarioCreateOrConnectWithoutUsuarioInput = class MovimientoInventarioCreateOrConnectWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], MovimientoInventarioCreateOrConnectWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateWithoutUsuarioInput_1.MovimientoInventarioCreateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateWithoutUsuarioInput_1.MovimientoInventarioCreateWithoutUsuarioInput)
], MovimientoInventarioCreateOrConnectWithoutUsuarioInput.prototype, "create", void 0);
MovimientoInventarioCreateOrConnectWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCreateOrConnectWithoutUsuarioInput", {
        isAbstract: true
    })
], MovimientoInventarioCreateOrConnectWithoutUsuarioInput);
exports.MovimientoInventarioCreateOrConnectWithoutUsuarioInput = MovimientoInventarioCreateOrConnectWithoutUsuarioInput;
