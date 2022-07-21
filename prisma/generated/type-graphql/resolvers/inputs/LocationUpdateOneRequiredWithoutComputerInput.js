"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateOneRequiredWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateOrConnectWithoutComputerInput_1 = require("../inputs/LocationCreateOrConnectWithoutComputerInput");
const LocationCreateWithoutComputerInput_1 = require("../inputs/LocationCreateWithoutComputerInput");
const LocationUpdateWithoutComputerInput_1 = require("../inputs/LocationUpdateWithoutComputerInput");
const LocationUpsertWithoutComputerInput_1 = require("../inputs/LocationUpsertWithoutComputerInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpdateOneRequiredWithoutComputerInput = class LocationUpdateOneRequiredWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutComputerInput_1.LocationCreateWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutComputerInput_1.LocationCreateWithoutComputerInput)
], LocationUpdateOneRequiredWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutComputerInput_1.LocationCreateOrConnectWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateOrConnectWithoutComputerInput_1.LocationCreateOrConnectWithoutComputerInput)
], LocationUpdateOneRequiredWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpsertWithoutComputerInput_1.LocationUpsertWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpsertWithoutComputerInput_1.LocationUpsertWithoutComputerInput)
], LocationUpdateOneRequiredWithoutComputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationUpdateOneRequiredWithoutComputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateWithoutComputerInput_1.LocationUpdateWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateWithoutComputerInput_1.LocationUpdateWithoutComputerInput)
], LocationUpdateOneRequiredWithoutComputerInput.prototype, "update", void 0);
LocationUpdateOneRequiredWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpdateOneRequiredWithoutComputerInput", {
        isAbstract: true
    })
], LocationUpdateOneRequiredWithoutComputerInput);
exports.LocationUpdateOneRequiredWithoutComputerInput = LocationUpdateOneRequiredWithoutComputerInput;
