"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateWhereInput_1 = require("../../../inputs/StateWhereInput");
let DeleteManyStateArgs = class DeleteManyStateArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereInput_1.StateWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereInput_1.StateWhereInput)
], DeleteManyStateArgs.prototype, "where", void 0);
DeleteManyStateArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyStateArgs);
exports.DeleteManyStateArgs = DeleteManyStateArgs;
