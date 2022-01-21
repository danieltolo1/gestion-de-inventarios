"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MovimientoInventarioSumAggregate = class MovimientoInventarioSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioSumAggregate.prototype, "cantidad", void 0);
MovimientoInventarioSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MovimientoInventarioSumAggregate", {
        isAbstract: true
    })
], MovimientoInventarioSumAggregate);
exports.MovimientoInventarioSumAggregate = MovimientoInventarioSumAggregate;
