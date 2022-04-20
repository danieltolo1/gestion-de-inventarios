"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerWhereInput_1 = require("../inputs/ComputerWhereInput");
let ComputerListRelationFilter = class ComputerListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], ComputerListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], ComputerListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], ComputerListRelationFilter.prototype, "none", void 0);
ComputerListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerListRelationFilter", {
        isAbstract: true
    })
], ComputerListRelationFilter);
exports.ComputerListRelationFilter = ComputerListRelationFilter;
