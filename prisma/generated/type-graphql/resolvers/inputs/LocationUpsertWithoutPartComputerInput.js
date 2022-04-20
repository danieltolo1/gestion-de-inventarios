"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpsertWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateWithoutPartComputerInput_1 = require("../inputs/LocationCreateWithoutPartComputerInput");
const LocationUpdateWithoutPartComputerInput_1 = require("../inputs/LocationUpdateWithoutPartComputerInput");
let LocationUpsertWithoutPartComputerInput = class LocationUpsertWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateWithoutPartComputerInput_1.LocationUpdateWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateWithoutPartComputerInput_1.LocationUpdateWithoutPartComputerInput)
], LocationUpsertWithoutPartComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutPartComputerInput_1.LocationCreateWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutPartComputerInput_1.LocationCreateWithoutPartComputerInput)
], LocationUpsertWithoutPartComputerInput.prototype, "create", void 0);
LocationUpsertWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpsertWithoutPartComputerInput", {
        isAbstract: true
    })
], LocationUpsertWithoutPartComputerInput);
exports.LocationUpsertWithoutPartComputerInput = LocationUpsertWithoutPartComputerInput;
