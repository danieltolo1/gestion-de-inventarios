"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCreateManyInventarioInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateManyInventarioInput_1 = require("../inputs/MovimientoInventarioCreateManyInventarioInput");
let MovimientoInventarioCreateManyInventarioInputEnvelope = class MovimientoInventarioCreateManyInventarioInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateManyInventarioInput_1.MovimientoInventarioCreateManyInventarioInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioCreateManyInventarioInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MovimientoInventarioCreateManyInventarioInputEnvelope.prototype, "skipDuplicates", void 0);
MovimientoInventarioCreateManyInventarioInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCreateManyInventarioInputEnvelope", {
        isAbstract: true
    })
], MovimientoInventarioCreateManyInventarioInputEnvelope);
exports.MovimientoInventarioCreateManyInventarioInputEnvelope = MovimientoInventarioCreateManyInventarioInputEnvelope;
