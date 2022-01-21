"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioUpdateWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioUpdateWithoutInventarioInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../inputs/MovimientoInventarioWhereUniqueInput");
let MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput = class MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateWithoutInventarioInput_1.MovimientoInventarioUpdateWithoutInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateWithoutInventarioInput_1.MovimientoInventarioUpdateWithoutInventarioInput)
], MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput.prototype, "data", void 0);
MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput", {
        isAbstract: true
    })
], MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput);
exports.MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput = MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput;
