"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MovimientoInventarioAvgAggregate = class MovimientoInventarioAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioAvgAggregate.prototype, "cantidad", void 0);
MovimientoInventarioAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MovimientoInventarioAvgAggregate", {
        isAbstract: true
    })
], MovimientoInventarioAvgAggregate);
exports.MovimientoInventarioAvgAggregate = MovimientoInventarioAvgAggregate;
