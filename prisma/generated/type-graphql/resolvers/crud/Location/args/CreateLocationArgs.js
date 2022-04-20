"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLocationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateInput_1 = require("../../../inputs/LocationCreateInput");
let CreateLocationArgs = class CreateLocationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateInput_1.LocationCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateInput_1.LocationCreateInput)
], CreateLocationArgs.prototype, "data", void 0);
CreateLocationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateLocationArgs);
exports.CreateLocationArgs = CreateLocationArgs;
