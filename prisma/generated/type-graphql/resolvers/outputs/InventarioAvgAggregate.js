"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let InventarioAvgAggregate = class InventarioAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioAvgAggregate.prototype, "cantidad", void 0);
InventarioAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("InventarioAvgAggregate", {
        isAbstract: true
    })
], InventarioAvgAggregate);
exports.InventarioAvgAggregate = InventarioAvgAggregate;
