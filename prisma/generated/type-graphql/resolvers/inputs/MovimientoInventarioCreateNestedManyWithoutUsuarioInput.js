"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCreateNestedManyWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateManyUsuarioInputEnvelope_1 = require("../inputs/MovimientoInventarioCreateManyUsuarioInputEnvelope");
const MovimientoInventarioCreateOrConnectWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioCreateOrConnectWithoutUsuarioInput");
const MovimientoInventarioCreateWithoutUsuarioInput_1 = require("../inputs/MovimientoInventarioCreateWithoutUsuarioInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../inputs/MovimientoInventarioWhereUniqueInput");
let MovimientoInventarioCreateNestedManyWithoutUsuarioInput = class MovimientoInventarioCreateNestedManyWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateWithoutUsuarioInput_1.MovimientoInventarioCreateWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioCreateNestedManyWithoutUsuarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateOrConnectWithoutUsuarioInput_1.MovimientoInventarioCreateOrConnectWithoutUsuarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioCreateNestedManyWithoutUsuarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateManyUsuarioInputEnvelope_1.MovimientoInventarioCreateManyUsuarioInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateManyUsuarioInputEnvelope_1.MovimientoInventarioCreateManyUsuarioInputEnvelope)
], MovimientoInventarioCreateNestedManyWithoutUsuarioInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioCreateNestedManyWithoutUsuarioInput.prototype, "connect", void 0);
MovimientoInventarioCreateNestedManyWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCreateNestedManyWithoutUsuarioInput", {
        isAbstract: true
    })
], MovimientoInventarioCreateNestedManyWithoutUsuarioInput);
exports.MovimientoInventarioCreateNestedManyWithoutUsuarioInput = MovimientoInventarioCreateNestedManyWithoutUsuarioInput;
