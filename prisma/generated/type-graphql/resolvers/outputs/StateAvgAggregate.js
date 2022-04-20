"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let StateAvgAggregate = class StateAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateAvgAggregate.prototype, "id_state", void 0);
StateAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("StateAvgAggregate", {
        isAbstract: true
    })
], StateAvgAggregate);
exports.StateAvgAggregate = StateAvgAggregate;
