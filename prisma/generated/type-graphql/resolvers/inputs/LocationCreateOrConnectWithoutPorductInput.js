"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateOrConnectWithoutPorductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateWithoutPorductInput_1 = require("../inputs/LocationCreateWithoutPorductInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateOrConnectWithoutPorductInput = class LocationCreateOrConnectWithoutPorductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateOrConnectWithoutPorductInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutPorductInput_1.LocationCreateWithoutPorductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutPorductInput_1.LocationCreateWithoutPorductInput)
], LocationCreateOrConnectWithoutPorductInput.prototype, "create", void 0);
LocationCreateOrConnectWithoutPorductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateOrConnectWithoutPorductInput", {
        isAbstract: true
    })
], LocationCreateOrConnectWithoutPorductInput);
exports.LocationCreateOrConnectWithoutPorductInput = LocationCreateOrConnectWithoutPorductInput;
