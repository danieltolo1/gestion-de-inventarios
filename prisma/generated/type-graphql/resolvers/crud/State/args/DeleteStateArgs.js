"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateWhereUniqueInput_1 = require("../../../inputs/StateWhereUniqueInput");
let DeleteStateArgs = class DeleteStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], DeleteStateArgs.prototype, "where", void 0);
DeleteStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteStateArgs);
exports.DeleteStateArgs = DeleteStateArgs;
