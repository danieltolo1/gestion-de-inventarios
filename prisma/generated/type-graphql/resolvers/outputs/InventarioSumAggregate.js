"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let InventarioSumAggregate = class InventarioSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioSumAggregate.prototype, "cantidad", void 0);
InventarioSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("InventarioSumAggregate", {
        isAbstract: true
    })
], InventarioSumAggregate);
exports.InventarioSumAggregate = InventarioSumAggregate;
