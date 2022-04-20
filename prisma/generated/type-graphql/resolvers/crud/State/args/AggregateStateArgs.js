"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateOrderByWithRelationInput_1 = require("../../../inputs/StateOrderByWithRelationInput");
const StateWhereInput_1 = require("../../../inputs/StateWhereInput");
const StateWhereUniqueInput_1 = require("../../../inputs/StateWhereUniqueInput");
let AggregateStateArgs = class AggregateStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereInput_1.StateWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereInput_1.StateWhereInput)
], AggregateStateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateOrderByWithRelationInput_1.StateOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateStateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], AggregateStateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateStateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateStateArgs.prototype, "skip", void 0);
AggregateStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateStateArgs);
exports.AggregateStateArgs = AggregateStateArgs;
