"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLocationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationOrderByWithRelationInput_1 = require("../../../inputs/LocationOrderByWithRelationInput");
const LocationWhereInput_1 = require("../../../inputs/LocationWhereInput");
const LocationWhereUniqueInput_1 = require("../../../inputs/LocationWhereUniqueInput");
const LocationScalarFieldEnum_1 = require("../../../../enums/LocationScalarFieldEnum");
let FindFirstLocationArgs = class FindFirstLocationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereInput_1.LocationWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereInput_1.LocationWhereInput)
], FindFirstLocationArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationOrderByWithRelationInput_1.LocationOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstLocationArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], FindFirstLocationArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstLocationArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstLocationArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationScalarFieldEnum_1.LocationScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstLocationArgs.prototype, "distinct", void 0);
FindFirstLocationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstLocationArgs);
exports.FindFirstLocationArgs = FindFirstLocationArgs;
