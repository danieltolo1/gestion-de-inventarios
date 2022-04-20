"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerWhereInput_1 = require("../inputs/ComputerWhereInput");
let ComputerRelationFilter = class ComputerRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], ComputerRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], ComputerRelationFilter.prototype, "isNot", void 0);
ComputerRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerRelationFilter", {
        isAbstract: true
    })
], ComputerRelationFilter);
exports.ComputerRelationFilter = ComputerRelationFilter;
