"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateUpdateInput_1 = require("../../../inputs/StateUpdateInput");
const StateWhereUniqueInput_1 = require("../../../inputs/StateWhereUniqueInput");
let UpdateStateArgs = class UpdateStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateUpdateInput_1.StateUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateUpdateInput_1.StateUpdateInput)
], UpdateStateArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], UpdateStateArgs.prototype, "where", void 0);
UpdateStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateStateArgs);
exports.UpdateStateArgs = UpdateStateArgs;
