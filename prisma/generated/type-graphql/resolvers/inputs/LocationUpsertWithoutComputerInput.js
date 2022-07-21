"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpsertWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateWithoutComputerInput_1 = require("../inputs/LocationCreateWithoutComputerInput");
const LocationUpdateWithoutComputerInput_1 = require("../inputs/LocationUpdateWithoutComputerInput");
let LocationUpsertWithoutComputerInput = class LocationUpsertWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateWithoutComputerInput_1.LocationUpdateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateWithoutComputerInput_1.LocationUpdateWithoutComputerInput)
], LocationUpsertWithoutComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutComputerInput_1.LocationCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutComputerInput_1.LocationCreateWithoutComputerInput)
], LocationUpsertWithoutComputerInput.prototype, "create", void 0);
LocationUpsertWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpsertWithoutComputerInput", {
        isAbstract: true
    })
], LocationUpsertWithoutComputerInput);
exports.LocationUpsertWithoutComputerInput = LocationUpsertWithoutComputerInput;
