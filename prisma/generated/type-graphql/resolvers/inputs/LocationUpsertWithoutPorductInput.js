"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpsertWithoutPorductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateWithoutPorductInput_1 = require("../inputs/LocationCreateWithoutPorductInput");
const LocationUpdateWithoutPorductInput_1 = require("../inputs/LocationUpdateWithoutPorductInput");
let LocationUpsertWithoutPorductInput = class LocationUpsertWithoutPorductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateWithoutPorductInput_1.LocationUpdateWithoutPorductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateWithoutPorductInput_1.LocationUpdateWithoutPorductInput)
], LocationUpsertWithoutPorductInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutPorductInput_1.LocationCreateWithoutPorductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutPorductInput_1.LocationCreateWithoutPorductInput)
], LocationUpsertWithoutPorductInput.prototype, "create", void 0);
LocationUpsertWithoutPorductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpsertWithoutPorductInput", {
        isAbstract: true
    })
], LocationUpsertWithoutPorductInput);
exports.LocationUpsertWithoutPorductInput = LocationUpsertWithoutPorductInput;
