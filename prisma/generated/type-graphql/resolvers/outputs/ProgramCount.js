"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProgramCount = class ProgramCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProgramCount.prototype, "computer", void 0);
ProgramCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProgramCount", {
        isAbstract: true
    })
], ProgramCount);
exports.ProgramCount = ProgramCount;
