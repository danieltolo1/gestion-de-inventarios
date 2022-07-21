"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProgramAvgAggregate = class ProgramAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProgramAvgAggregate.prototype, "id_program", void 0);
ProgramAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProgramAvgAggregate", {
        isAbstract: true
    })
], ProgramAvgAggregate);
exports.ProgramAvgAggregate = ProgramAvgAggregate;
