"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateNestedOneWithoutPorductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateOrConnectWithoutPorductInput_1 = require("../inputs/LocationCreateOrConnectWithoutPorductInput");
const LocationCreateWithoutPorductInput_1 = require("../inputs/LocationCreateWithoutPorductInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateNestedOneWithoutPorductInput = class LocationCreateNestedOneWithoutPorductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutPorductInput_1.LocationCreateWithoutPorductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutPorductInput_1.LocationCreateWithoutPorductInput)
], LocationCreateNestedOneWithoutPorductInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutPorductInput_1.LocationCreateOrConnectWithoutPorductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateOrConnectWithoutPorductInput_1.LocationCreateOrConnectWithoutPorductInput)
], LocationCreateNestedOneWithoutPorductInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateNestedOneWithoutPorductInput.prototype, "connect", void 0);
LocationCreateNestedOneWithoutPorductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateNestedOneWithoutPorductInput", {
        isAbstract: true
    })
], LocationCreateNestedOneWithoutPorductInput);
exports.LocationCreateNestedOneWithoutPorductInput = LocationCreateNestedOneWithoutPorductInput;
