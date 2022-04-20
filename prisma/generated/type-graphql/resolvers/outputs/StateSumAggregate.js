"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let StateSumAggregate = class StateSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateSumAggregate.prototype, "id_state", void 0);
StateSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("StateSumAggregate", {
        isAbstract: true
    })
], StateSumAggregate);
exports.StateSumAggregate = StateSumAggregate;
