"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LocationWhereUniqueInput = class LocationWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationWhereUniqueInput.prototype, "id_location", void 0);
LocationWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationWhereUniqueInput", {
        isAbstract: true
    })
], LocationWhereUniqueInput);
exports.LocationWhereUniqueInput = LocationWhereUniqueInput;
