"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertLocationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateInput_1 = require("../../../inputs/LocationCreateInput");
const LocationUpdateInput_1 = require("../../../inputs/LocationUpdateInput");
const LocationWhereUniqueInput_1 = require("../../../inputs/LocationWhereUniqueInput");
let UpsertLocationArgs = class UpsertLocationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], UpsertLocationArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateInput_1.LocationCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateInput_1.LocationCreateInput)
], UpsertLocationArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateInput_1.LocationUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateInput_1.LocationUpdateInput)
], UpsertLocationArgs.prototype, "update", void 0);
UpsertLocationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertLocationArgs);
exports.UpsertLocationArgs = UpsertLocationArgs;
