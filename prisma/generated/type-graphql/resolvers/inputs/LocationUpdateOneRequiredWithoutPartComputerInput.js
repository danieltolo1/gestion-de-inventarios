"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateOneRequiredWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateOrConnectWithoutPartComputerInput_1 = require("../inputs/LocationCreateOrConnectWithoutPartComputerInput");
const LocationCreateWithoutPartComputerInput_1 = require("../inputs/LocationCreateWithoutPartComputerInput");
const LocationUpdateWithoutPartComputerInput_1 = require("../inputs/LocationUpdateWithoutPartComputerInput");
const LocationUpsertWithoutPartComputerInput_1 = require("../inputs/LocationUpsertWithoutPartComputerInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpdateOneRequiredWithoutPartComputerInput = class LocationUpdateOneRequiredWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutPartComputerInput_1.LocationCreateWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutPartComputerInput_1.LocationCreateWithoutPartComputerInput)
], LocationUpdateOneRequiredWithoutPartComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutPartComputerInput_1.LocationCreateOrConnectWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateOrConnectWithoutPartComputerInput_1.LocationCreateOrConnectWithoutPartComputerInput)
], LocationUpdateOneRequiredWithoutPartComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpsertWithoutPartComputerInput_1.LocationUpsertWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpsertWithoutPartComputerInput_1.LocationUpsertWithoutPartComputerInput)
], LocationUpdateOneRequiredWithoutPartComputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationUpdateOneRequiredWithoutPartComputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateWithoutPartComputerInput_1.LocationUpdateWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateWithoutPartComputerInput_1.LocationUpdateWithoutPartComputerInput)
], LocationUpdateOneRequiredWithoutPartComputerInput.prototype, "update", void 0);
LocationUpdateOneRequiredWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpdateOneRequiredWithoutPartComputerInput", {
        isAbstract: true
    })
], LocationUpdateOneRequiredWithoutPartComputerInput);
exports.LocationUpdateOneRequiredWithoutPartComputerInput = LocationUpdateOneRequiredWithoutPartComputerInput;
