"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateOrderByWithRelationInput_1 = require("../../../inputs/StateOrderByWithRelationInput");
const StateWhereInput_1 = require("../../../inputs/StateWhereInput");
const StateWhereUniqueInput_1 = require("../../../inputs/StateWhereUniqueInput");
const StateScalarFieldEnum_1 = require("../../../../enums/StateScalarFieldEnum");
let FindFirstStateArgs = class FindFirstStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereInput_1.StateWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereInput_1.StateWhereInput)
], FindFirstStateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateOrderByWithRelationInput_1.StateOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstStateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], FindFirstStateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstStateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstStateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateScalarFieldEnum_1.StateScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstStateArgs.prototype, "distinct", void 0);
FindFirstStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstStateArgs);
exports.FindFirstStateArgs = FindFirstStateArgs;
