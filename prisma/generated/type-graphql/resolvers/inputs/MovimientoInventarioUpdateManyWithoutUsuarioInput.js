"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpdateManyWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateManyUsuarioInputEnvelope_1 = require("../inputs/MovimientoInventarioCreateManyUsuarioInputEnvelope");
const MovimientoInventarioCreateOrConnectWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioCreateOrConnectWithoutUsuarioInput");
const MovimientoInventarioCreateWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioCreateWithoutUsuarioInput");
const MovimientoInventarioScalarWhereInput_1 = require("../inputs/MovimientoInventarioScalarWhereInput");
const MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput");
const MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput");
const MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../inputs/MovimientoInventarioWhereUniqueInput");
let MovimientoInventarioUpdateManyWithoutUsuarioInput = class MovimientoInventarioUpdateManyWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateWithoutUsuarioInput_1.MovimientoInventarioCreateWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateOrConnectWithoutUsuarioInput_1.MovimientoInventarioCreateOrConnectWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput_1.MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateManyUsuarioInputEnvelope_1.MovimientoInventarioCreateManyUsuarioInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateManyUsuarioInputEnvelope_1.MovimientoInventarioCreateManyUsuarioInputEnvelope)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput_1.MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput_1.MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioScalarWhereInput_1.MovimientoInventarioScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutUsuarioInput.prototype, "deleteMany", void 0);
MovimientoInventarioUpdateManyWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpdateManyWithoutUsuarioInput", {
        isAbstract: true
    })
], MovimientoInventarioUpdateManyWithoutUsuarioInput);
exports.MovimientoInventarioUpdateManyWithoutUsuarioInput = MovimientoInventarioUpdateManyWithoutUsuarioInput;
