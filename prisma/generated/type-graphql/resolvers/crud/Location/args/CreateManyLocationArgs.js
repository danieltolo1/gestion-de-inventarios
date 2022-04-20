"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLocationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateManyInput_1 = require("../../../inputs/LocationCreateManyInput");
let CreateManyLocationArgs = class CreateManyLocationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationCreateManyInput_1.LocationCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyLocationArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyLocationArgs.prototype, "skipDuplicates", void 0);
CreateManyLocationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyLocationArgs);
exports.CreateManyLocationArgs = CreateManyLocationArgs;
