"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateInput_1 = require("../../../inputs/StateCreateInput");
const StateUpdateInput_1 = require("../../../inputs/StateUpdateInput");
const StateWhereUniqueInput_1 = require("../../../inputs/StateWhereUniqueInput");
let UpsertStateArgs = class UpsertStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], UpsertStateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateInput_1.StateCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateInput_1.StateCreateInput)
], UpsertStateArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateUpdateInput_1.StateUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateUpdateInput_1.StateUpdateInput)
], UpsertStateArgs.prototype, "update", void 0);
UpsertStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertStateArgs);
exports.UpsertStateArgs = UpsertStateArgs;
