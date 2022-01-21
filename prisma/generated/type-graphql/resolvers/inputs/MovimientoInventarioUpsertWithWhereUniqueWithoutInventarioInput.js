"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioCreateWithoutInventarioInput");
const MovimientoInventarioUpdateWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioUpdateWithoutInventarioInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../inputs/MovimientoInventarioWhereUniqueInput");
let MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput = class MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput)
], MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioUpdateWithoutInventarioInput_1.MovimientoInventarioUpdateWithoutInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioUpdateWithoutInventarioInput_1.MovimientoInventarioUpdateWithoutInventarioInput)
], MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateWithoutInventarioInput_1.MovimientoInventarioCreateWithoutInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateWithoutInventarioInput_1.MovimientoInventarioCreateWithoutInventarioInput)
], MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput.prototype, "create", void 0);
MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput", {
        isAbstract: true
    })
], MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput);
exports.MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput = MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput;
