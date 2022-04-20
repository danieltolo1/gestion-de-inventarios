"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCount_1 = require("../resolvers/outputs/StateCount");
let State = class State {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], State.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], State.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCount_1.StateCount, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCount_1.StateCount)
], State.prototype, "_count", void 0);
State = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("State", {
        isAbstract: true
    })
], State);
exports.State = State;
