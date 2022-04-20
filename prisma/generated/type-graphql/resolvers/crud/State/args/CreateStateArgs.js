"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateInput_1 = require("../../../inputs/StateCreateInput");
let CreateStateArgs = class CreateStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateInput_1.StateCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateInput_1.StateCreateInput)
], CreateStateArgs.prototype, "data", void 0);
CreateStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateStateArgs);
exports.CreateStateArgs = CreateStateArgs;
