"use strict";
var StateWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerListRelationFilter_1 = require("../inputs/ComputerListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let StateWhereInput = StateWhereInput_1 = class StateWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], StateWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], StateWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [StateWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], StateWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], StateWhereInput.prototype, "id_state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], StateWhereInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], StateWhereInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerListRelationFilter_1.ComputerListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerListRelationFilter_1.ComputerListRelationFilter)
], StateWhereInput.prototype, "computer", void 0);
StateWhereInput = StateWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateWhereInput", {
        isAbstract: true
    })
], StateWhereInput);
exports.StateWhereInput = StateWhereInput;
