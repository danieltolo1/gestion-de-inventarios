"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let StateCount = class StateCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateCount.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateCount.prototype, "computer", void 0);
StateCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("StateCount", {
        isAbstract: true
    })
], StateCount);
exports.StateCount = StateCount;
