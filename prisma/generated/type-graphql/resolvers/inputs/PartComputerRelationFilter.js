"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerWhereInput_1 = require("../inputs/PartComputerWhereInput");
let PartComputerRelationFilter = class PartComputerRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereInput_1.PartComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereInput_1.PartComputerWhereInput)
], PartComputerRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereInput_1.PartComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereInput_1.PartComputerWhereInput)
], PartComputerRelationFilter.prototype, "isNot", void 0);
PartComputerRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerRelationFilter", {
        isAbstract: true
    })
], PartComputerRelationFilter);
exports.PartComputerRelationFilter = PartComputerRelationFilter;
