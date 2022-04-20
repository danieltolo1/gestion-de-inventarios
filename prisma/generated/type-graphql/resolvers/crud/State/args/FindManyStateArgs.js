"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateOrderByWithRelationInput_1 = require("../../../inputs/StateOrderByWithRelationInput");
const StateWhereInput_1 = require("../../../inputs/StateWhereInput");
const StateWhereUniqueInput_1 = require("../../../inputs/StateWhereUniqueInput");
const StateScalarFieldEnum_1 = require("../../../../enums/StateScalarFieldEnum");
let FindManyStateArgs = class FindManyStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereInput_1.StateWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereInput_1.StateWhereInput)
], FindManyStateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateOrderByWithRelationInput_1.StateOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyStateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], FindManyStateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyStateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyStateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateScalarFieldEnum_1.StateScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyStateArgs.prototype, "distinct", void 0);
FindManyStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyStateArgs);
exports.FindManyStateArgs = FindManyStateArgs;
