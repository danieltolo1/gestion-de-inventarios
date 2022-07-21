"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Computer_1 = require("../../../models/Computer");
const Maintenance_1 = require("../../../models/Maintenance");
const Product_1 = require("../../../models/Product");
const User_1 = require("../../../models/User");
const MaintenanceProductArgs_1 = require("./args/MaintenanceProductArgs");
const helpers_1 = require("../../../helpers");
let MaintenanceRelationsResolver = class MaintenanceRelationsResolver {
    async user(maintenance, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.findUnique({
            where: {
                id_maintenance: maintenance.id_maintenance,
            },
        }).user({});
    }
    async computer(maintenance, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.findUnique({
            where: {
                id_maintenance: maintenance.id_maintenance,
            },
        }).computer({});
    }
    async product(maintenance, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.findUnique({
            where: {
                id_maintenance: maintenance.id_maintenance,
            },
        }).product(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Maintenance_1.Maintenance, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceRelationsResolver.prototype, "user", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Computer_1.Computer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Maintenance_1.Maintenance, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceRelationsResolver.prototype, "computer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Maintenance_1.Maintenance, Object, MaintenanceProductArgs_1.MaintenanceProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceRelationsResolver.prototype, "product", null);
MaintenanceRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Maintenance_1.Maintenance)
], MaintenanceRelationsResolver);
exports.MaintenanceRelationsResolver = MaintenanceRelationsResolver;
