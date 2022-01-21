"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioUpdateManyWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateManyInventarioInputEnvelope_1 = require("../inputs/MovimientoInventarioCreateManyInventarioInputEnvelope");
const MovimientoInventarioCreateOrConnectWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioCreateOrConnectWithoutInventarioInput");
const MovimientoInventarioCreateWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioCreateWithoutInventarioInput");
const MovimientoInventarioScalarWhereInput_1 = require("../inputs/MovimientoInventarioScalarWhereInput");
const MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput");
const MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput");
const MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../inputs/MovimientoInventarioWhereUniqueInput");
let MovimientoInventarioUpdateManyWithoutInventarioInput = class MovimientoInventarioUpdateManyWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateWithoutInventarioInput_1.MovimientoInventarioCreateWithoutInventarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateOrConnectWithoutInventarioInput_1.MovimientoInventarioCreateOrConnectWithoutInventarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput_1.MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateManyInventarioInputEnvelope_1.MovimientoInventarioCreateManyInventarioInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateManyInventarioInputEnvelope_1.MovimientoInventarioCreateManyInventarioInputEnvelope)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput_1.MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput_1.MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioScalarWhereInput_1.MovimientoInventarioScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioUpdateManyWithoutInventarioInput.prototype, "deleteMany", void 0);
MovimientoInventarioUpdateManyWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioUpdateManyWithoutInventarioInput", {
        isAbstract: true
    })
], MovimientoInventarioUpdateManyWithoutInventarioInput);
exports.MovimientoInventarioUpdateManyWithoutInventarioInput = MovimientoInventarioUpdateManyWithoutInventarioInput;
