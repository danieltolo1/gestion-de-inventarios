"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSoftwareComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerOrderByWithRelationInput_1 = require("../../../inputs/SoftwareComputerOrderByWithRelationInput");
const SoftwareComputerWhereInput_1 = require("../../../inputs/SoftwareComputerWhereInput");
const SoftwareComputerWhereUniqueInput_1 = require("../../../inputs/SoftwareComputerWhereUniqueInput");
let AggregateSoftwareComputerArgs = class AggregateSoftwareComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereInput_1.SoftwareComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereInput_1.SoftwareComputerWhereInput)
], AggregateSoftwareComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SoftwareComputerOrderByWithRelationInput_1.SoftwareComputerOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateSoftwareComputerArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], AggregateSoftwareComputerArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateSoftwareComputerArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateSoftwareComputerArgs.prototype, "skip", void 0);
AggregateSoftwareComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateSoftwareComputerArgs);
exports.AggregateSoftwareComputerArgs = AggregateSoftwareComputerArgs;
