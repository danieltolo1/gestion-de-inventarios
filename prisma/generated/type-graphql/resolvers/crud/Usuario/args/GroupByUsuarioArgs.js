"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioOrderByWithAggregationInput_1 = require("../../../inputs/UsuarioOrderByWithAggregationInput");
const UsuarioScalarWhereWithAggregatesInput_1 = require("../../../inputs/UsuarioScalarWhereWithAggregatesInput");
const UsuarioWhereInput_1 = require("../../../inputs/UsuarioWhereInput");
const UsuarioScalarFieldEnum_1 = require("../../../../enums/UsuarioScalarFieldEnum");
let GroupByUsuarioArgs = class GroupByUsuarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereInput_1.UsuarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereInput_1.UsuarioWhereInput)
], GroupByUsuarioArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UsuarioOrderByWithAggregationInput_1.UsuarioOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByUsuarioArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UsuarioScalarFieldEnum_1.UsuarioScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByUsuarioArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioScalarWhereWithAggregatesInput_1.UsuarioScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioScalarWhereWithAggregatesInput_1.UsuarioScalarWhereWithAggregatesInput)
], GroupByUsuarioArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByUsuarioArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByUsuarioArgs.prototype, "skip", void 0);
GroupByUsuarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByUsuarioArgs);
exports.GroupByUsuarioArgs = GroupByUsuarioArgs;
