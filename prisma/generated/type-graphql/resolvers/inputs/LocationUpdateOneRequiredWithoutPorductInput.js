"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateOneRequiredWithoutPorductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateOrConnectWithoutPorductInput_1 = require("../inputs/LocationCreateOrConnectWithoutPorductInput");
const LocationCreateWithoutPorductInput_1 = require("../inputs/LocationCreateWithoutPorductInput");
const LocationUpdateWithoutPorductInput_1 = require("../inputs/LocationUpdateWithoutPorductInput");
const LocationUpsertWithoutPorductInput_1 = require("../inputs/LocationUpsertWithoutPorductInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpdateOneRequiredWithoutPorductInput = class LocationUpdateOneRequiredWithoutPorductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutPorductInput_1.LocationCreateWithoutPorductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutPorductInput_1.LocationCreateWithoutPorductInput)
], LocationUpdateOneRequiredWithoutPorductInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutPorductInput_1.LocationCreateOrConnectWithoutPorductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateOrConnectWithoutPorductInput_1.LocationCreateOrConnectWithoutPorductInput)
], LocationUpdateOneRequiredWithoutPorductInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpsertWithoutPorductInput_1.LocationUpsertWithoutPorductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpsertWithoutPorductInput_1.LocationUpsertWithoutPorductInput)
], LocationUpdateOneRequiredWithoutPorductInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationUpdateOneRequiredWithoutPorductInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationUpdateWithoutPorductInput_1.LocationUpdateWithoutPorductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationUpdateWithoutPorductInput_1.LocationUpdateWithoutPorductInput)
], LocationUpdateOneRequiredWithoutPorductInput.prototype, "update", void 0);
LocationUpdateOneRequiredWithoutPorductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpdateOneRequiredWithoutPorductInput", {
        isAbstract: true
    })
], LocationUpdateOneRequiredWithoutPorductInput);
exports.LocationUpdateOneRequiredWithoutPorductInput = LocationUpdateOneRequiredWithoutPorductInput;
