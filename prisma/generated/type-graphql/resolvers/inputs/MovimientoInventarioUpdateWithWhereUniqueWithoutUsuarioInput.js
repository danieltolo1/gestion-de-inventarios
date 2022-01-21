"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioUpdateWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioUpdateWithoutUsuarioInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../inputs/MovimientoInventarioWhereUniqueInput");
let MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput = class MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateWithoutUsuarioInput_1.MovimientoInventarioUpdateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateWithoutUsuarioInput_1.MovimientoInventarioUpdateWithoutUsuarioInput)
], MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput.prototype, "data", void 0);
MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput", {
        isAbstract: true
    })
], MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput);
exports.MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput = MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput;
