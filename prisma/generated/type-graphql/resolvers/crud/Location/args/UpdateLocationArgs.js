"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLocationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationUpdateInput_1 = require("../../../inputs/LocationUpdateInput");
const LocationWhereUniqueInput_1 = require("../../../inputs/LocationWhereUniqueInput");
let UpdateLocationArgs = class UpdateLocationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateInput_1.LocationUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateInput_1.LocationUpdateInput)
], UpdateLocationArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], UpdateLocationArgs.prototype, "where", void 0);
UpdateLocationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateLocationArgs);
exports.UpdateLocationArgs = UpdateLocationArgs;
