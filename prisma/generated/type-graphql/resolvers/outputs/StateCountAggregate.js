"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let StateCountAggregate = class StateCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateCountAggregate.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateCountAggregate.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateCountAggregate.prototype, "_all", void 0);
StateCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("StateCountAggregate", {
        isAbstract: true
    })
], StateCountAggregate);
exports.StateCountAggregate = StateCountAggregate;
