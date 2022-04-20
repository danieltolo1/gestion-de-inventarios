"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerOrderByWithRelationInput_1 = require("../../../inputs/ComputerOrderByWithRelationInput");
const ComputerWhereInput_1 = require("../../../inputs/ComputerWhereInput");
const ComputerWhereUniqueInput_1 = require("../../../inputs/ComputerWhereUniqueInput");
const ComputerScalarFieldEnum_1 = require("../../../../enums/ComputerScalarFieldEnum");
let SoftwareComputerComputerArgs = class SoftwareComputerComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereInput_1.ComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereInput_1.ComputerWhereInput)
], SoftwareComputerComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerOrderByWithRelationInput_1.ComputerOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SoftwareComputerComputerArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], SoftwareComputerComputerArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerComputerArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerComputerArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarFieldEnum_1.ComputerScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SoftwareComputerComputerArgs.prototype, "distinct", void 0);
SoftwareComputerComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], SoftwareComputerComputerArgs);
exports.SoftwareComputerComputerArgs = SoftwareComputerComputerArgs;
