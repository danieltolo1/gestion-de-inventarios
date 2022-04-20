"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateWhereInput_1 = require("../inputs/StateWhereInput");
let StateRelationFilter = class StateRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereInput_1.StateWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereInput_1.StateWhereInput)
], StateRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereInput_1.StateWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereInput_1.StateWhereInput)
], StateRelationFilter.prototype, "isNot", void 0);
StateRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateRelationFilter", {
        isAbstract: true
    })
], StateRelationFilter);
exports.StateRelationFilter = StateRelationFilter;
