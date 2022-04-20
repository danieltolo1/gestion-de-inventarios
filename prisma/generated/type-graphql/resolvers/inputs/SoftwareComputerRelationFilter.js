"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerWhereInput_1 = require("../inputs/SoftwareComputerWhereInput");
let SoftwareComputerRelationFilter = class SoftwareComputerRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereInput_1.SoftwareComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereInput_1.SoftwareComputerWhereInput)
], SoftwareComputerRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereInput_1.SoftwareComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereInput_1.SoftwareComputerWhereInput)
], SoftwareComputerRelationFilter.prototype, "isNot", void 0);
SoftwareComputerRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerRelationFilter", {
        isAbstract: true
    })
], SoftwareComputerRelationFilter);
exports.SoftwareComputerRelationFilter = SoftwareComputerRelationFilter;
