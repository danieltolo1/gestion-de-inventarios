"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateUpdateManyMutationInput_1 = require("../../../inputs/StateUpdateManyMutationInput");
const StateWhereInput_1 = require("../../../inputs/StateWhereInput");
let UpdateManyStateArgs = class UpdateManyStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateUpdateManyMutationInput_1.StateUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateUpdateManyMutationInput_1.StateUpdateManyMutationInput)
], UpdateManyStateArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereInput_1.StateWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereInput_1.StateWhereInput)
], UpdateManyStateArgs.prototype, "where", void 0);
UpdateManyStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyStateArgs);
exports.UpdateManyStateArgs = UpdateManyStateArgs;
