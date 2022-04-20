"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let StateMinAggregate = class StateMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateMinAggregate.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateMinAggregate.prototype, "description", void 0);
StateMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("StateMinAggregate", {
        isAbstract: true
    })
], StateMinAggregate);
exports.StateMinAggregate = StateMinAggregate;
