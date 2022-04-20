"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerWhereInput_1 = require("../inputs/PartComputerWhereInput");
let PartComputerListRelationFilter = class PartComputerListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereInput_1.PartComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereInput_1.PartComputerWhereInput)
], PartComputerListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereInput_1.PartComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereInput_1.PartComputerWhereInput)
], PartComputerListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereInput_1.PartComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereInput_1.PartComputerWhereInput)
], PartComputerListRelationFilter.prototype, "none", void 0);
PartComputerListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerListRelationFilter", {
        isAbstract: true
    })
], PartComputerListRelationFilter);
exports.PartComputerListRelationFilter = PartComputerListRelationFilter;
