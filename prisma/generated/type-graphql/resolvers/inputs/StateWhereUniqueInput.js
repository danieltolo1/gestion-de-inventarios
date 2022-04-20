"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let StateWhereUniqueInput = class StateWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], StateWhereUniqueInput.prototype, "id_state", void 0);
StateWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateWhereUniqueInput", {
        isAbstract: true
    })
], StateWhereUniqueInput);
exports.StateWhereUniqueInput = StateWhereUniqueInput;
