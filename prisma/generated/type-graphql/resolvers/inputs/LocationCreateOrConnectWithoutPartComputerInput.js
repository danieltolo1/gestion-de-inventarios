"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateOrConnectWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateWithoutPartComputerInput_1 = require("../inputs/LocationCreateWithoutPartComputerInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateOrConnectWithoutPartComputerInput = class LocationCreateOrConnectWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateOrConnectWithoutPartComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutPartComputerInput_1.LocationCreateWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutPartComputerInput_1.LocationCreateWithoutPartComputerInput)
], LocationCreateOrConnectWithoutPartComputerInput.prototype, "create", void 0);
LocationCreateOrConnectWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateOrConnectWithoutPartComputerInput", {
        isAbstract: true
    })
], LocationCreateOrConnectWithoutPartComputerInput);
exports.LocationCreateOrConnectWithoutPartComputerInput = LocationCreateOrConnectWithoutPartComputerInput;
