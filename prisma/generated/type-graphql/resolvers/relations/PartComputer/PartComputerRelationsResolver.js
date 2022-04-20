"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Computer_1 = require("../../../models/Computer");
const Location_1 = require("../../../models/Location");
const Maintenance_1 = require("../../../models/Maintenance");
const PartComputer_1 = require("../../../models/PartComputer");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let PartComputerRelationsResolver = class PartComputerRelationsResolver {
    async product(partComputer, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.findUnique({
            where: {
                id_partComputer: partComputer.id_partComputer,
            },
        }).product({});
    }
    async computer(partComputer, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.findUnique({
            where: {
                id_partComputer: partComputer.id_partComputer,
            },
        }).computer({});
    }
    async location(partComputer, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.findUnique({
            where: {
                id_partComputer: partComputer.id_partComputer,
            },
        }).location({});
    }
    async maintenance(partComputer, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.findUnique({
            where: {
                id_partComputer: partComputer.id_partComputer,
            },
        }).maintenance({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Product_1.Product, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [PartComputer_1.PartComputer, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerRelationsResolver.prototype, "product", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Computer_1.Computer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [PartComputer_1.PartComputer, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerRelationsResolver.prototype, "computer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Location_1.Location, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [PartComputer_1.PartComputer, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerRelationsResolver.prototype, "location", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Maintenance_1.Maintenance, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [PartComputer_1.PartComputer, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerRelationsResolver.prototype, "maintenance", null);
PartComputerRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => PartComputer_1.PartComputer)
], PartComputerRelationsResolver);
exports.PartComputerRelationsResolver = PartComputerRelationsResolver;
