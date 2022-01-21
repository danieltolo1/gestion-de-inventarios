"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioCreateWithoutUsuarioInput");
const MovimientoInventarioUpdateWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioUpdateWithoutUsuarioInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../inputs/MovimientoInventarioWhereUniqueInput");
let MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput = class MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateWithoutUsuarioInput_1.MovimientoInventarioUpdateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateWithoutUsuarioInput_1.MovimientoInventarioUpdateWithoutUsuarioInput)
], MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateWithoutUsuarioInput_1.MovimientoInventarioCreateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateWithoutUsuarioInput_1.MovimientoInventarioCreateWithoutUsuarioInput)
], MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput.prototype, "create", void 0);
MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput", {
        isAbstract: true
    })
], MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput);
exports.MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput = MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput;
