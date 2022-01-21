"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioOrderByWithRelationInput_1 = require("../../../inputs/InventarioOrderByWithRelationInput");
const InventarioWhereInput_1 = require("../../../inputs/InventarioWhereInput");
const InventarioWhereUniqueInput_1 = require("../../../inputs/InventarioWhereUniqueInput");
const InventarioScalarFieldEnum_1 = require("../../../../enums/InventarioScalarFieldEnum");
let FindManyInventarioArgs = class FindManyInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereInput_1.InventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereInput_1.InventarioWhereInput)
], FindManyInventarioArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InventarioOrderByWithRelationInput_1.InventarioOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyInventarioArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], FindManyInventarioArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyInventarioArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyInventarioArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InventarioScalarFieldEnum_1.InventarioScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyInventarioArgs.prototype, "distinct", void 0);
FindManyInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyInventarioArgs);
exports.FindManyInventarioArgs = FindManyInventarioArgs;
