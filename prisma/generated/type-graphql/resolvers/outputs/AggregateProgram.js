"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProgram = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramAvgAggregate_1 = require("../outputs/ProgramAvgAggregate");
const ProgramCountAggregate_1 = require("../outputs/ProgramCountAggregate");
const ProgramMaxAggregate_1 = require("../outputs/ProgramMaxAggregate");
const ProgramMinAggregate_1 = require("../outputs/ProgramMinAggregate");
const ProgramSumAggregate_1 = require("../outputs/ProgramSumAggregate");
let AggregateProgram = class AggregateProgram {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCountAggregate_1.ProgramCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCountAggregate_1.ProgramCountAggregate)
], AggregateProgram.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramAvgAggregate_1.ProgramAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramAvgAggregate_1.ProgramAvgAggregate)
], AggregateProgram.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramSumAggregate_1.ProgramSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramSumAggregate_1.ProgramSumAggregate)
], AggregateProgram.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramMinAggregate_1.ProgramMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramMinAggregate_1.ProgramMinAggregate)
], AggregateProgram.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramMaxAggregate_1.ProgramMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramMaxAggregate_1.ProgramMaxAggregate)
], AggregateProgram.prototype, "_max", void 0);
AggregateProgram = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateProgram", {
        isAbstract: true
    })
], AggregateProgram);
exports.AggregateProgram = AggregateProgram;
