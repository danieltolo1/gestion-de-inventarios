"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let StateMaxAggregate = class StateMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateMaxAggregate.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateMaxAggregate.prototype, "description", void 0);
StateMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("StateMaxAggregate", {
        isAbstract: true
    })
], StateMaxAggregate);
exports.StateMaxAggregate = StateMaxAggregate;
