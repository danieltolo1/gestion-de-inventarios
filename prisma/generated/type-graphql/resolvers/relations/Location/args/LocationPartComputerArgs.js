"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationPartComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerOrderByWithRelationInput_1 = require("../../../inputs/PartComputerOrderByWithRelationInput");
const PartComputerWhereInput_1 = require("../../../inputs/PartComputerWhereInput");
const PartComputerWhereUniqueInput_1 = require("../../../inputs/PartComputerWhereUniqueInput");
const PartComputerScalarFieldEnum_1 = require("../../../../enums/PartComputerScalarFieldEnum");
let LocationPartComputerArgs = class LocationPartComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereInput_1.PartComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereInput_1.PartComputerWhereInput)
], LocationPartComputerArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerOrderByWithRelationInput_1.PartComputerOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LocationPartComputerArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], LocationPartComputerArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationPartComputerArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationPartComputerArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarFieldEnum_1.PartComputerScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LocationPartComputerArgs.prototype, "distinct", void 0);
LocationPartComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], LocationPartComputerArgs);
exports.LocationPartComputerArgs = LocationPartComputerArgs;
