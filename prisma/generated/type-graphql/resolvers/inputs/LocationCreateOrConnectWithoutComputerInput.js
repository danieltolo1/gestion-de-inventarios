"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateOrConnectWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateWithoutComputerInput_1 = require("../inputs/LocationCreateWithoutComputerInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateOrConnectWithoutComputerInput = class LocationCreateOrConnectWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateOrConnectWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutComputerInput_1.LocationCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutComputerInput_1.LocationCreateWithoutComputerInput)
], LocationCreateOrConnectWithoutComputerInput.prototype, "create", void 0);
LocationCreateOrConnectWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateOrConnectWithoutComputerInput", {
        isAbstract: true
    })
], LocationCreateOrConnectWithoutComputerInput);
exports.LocationCreateOrConnectWithoutComputerInput = LocationCreateOrConnectWithoutComputerInput;
