"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LocationCreateManyInput = class LocationCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationCreateManyInput.prototype, "id_location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCreateManyInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCreateManyInput.prototype, "job_name", void 0);
LocationCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateManyInput", {
        isAbstract: true
    })
], LocationCreateManyInput);
exports.LocationCreateManyInput = LocationCreateManyInput;
