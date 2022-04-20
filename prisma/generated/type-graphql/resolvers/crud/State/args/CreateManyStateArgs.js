"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateManyInput_1 = require("../../../inputs/StateCreateManyInput");
let CreateManyStateArgs = class CreateManyStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateCreateManyInput_1.StateCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyStateArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyStateArgs.prototype, "skipDuplicates", void 0);
CreateManyStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyStateArgs);
exports.CreateManyStateArgs = CreateManyStateArgs;
