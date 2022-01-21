"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCreateManyUsuarioInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateManyUsuarioInput_1 = require("../inputs/MovimientoInventarioCreateManyUsuarioInput");
let MovimientoInventarioCreateManyUsuarioInputEnvelope = class MovimientoInventarioCreateManyUsuarioInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateManyUsuarioInput_1.MovimientoInventarioCreateManyUsuarioInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioCreateManyUsuarioInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MovimientoInventarioCreateManyUsuarioInputEnvelope.prototype, "skipDuplicates", void 0);
MovimientoInventarioCreateManyUsuarioInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCreateManyUsuarioInputEnvelope", {
        isAbstract: true
    })
], MovimientoInventarioCreateManyUsuarioInputEnvelope);
exports.MovimientoInventarioCreateManyUsuarioInputEnvelope = MovimientoInventarioCreateManyUsuarioInputEnvelope;
