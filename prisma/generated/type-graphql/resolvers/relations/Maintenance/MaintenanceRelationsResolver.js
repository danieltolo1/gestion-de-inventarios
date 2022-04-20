"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Maintenance_1 = require("../../../models/Maintenance");
const PartComputer_1 = require("../../../models/PartComputer");
const User_1 = require("../../../models/User");
const MaintenancePartComputerArgs_1 = require("./args/MaintenancePartComputerArgs");
const helpers_1 = require("../../../helpers");
let MaintenanceRelationsResolver = class MaintenanceRelationsResolver {
    async user(maintenance, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.findUnique({
            where: {
                id_maintenance: maintenance.id_maintenance,
            },
        }).user({});
    }
    async partComputer(maintenance, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.findUnique({
            where: {
                id_maintenance: maintenance.id_maintenance,
            },
        }).partComputer(args);
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
    TypeGraphQL.FieldResolver(_type => [PartComputer_1.PartComputer], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Maintenance_1.Maintenance, Object, MaintenancePartComputerArgs_1.MaintenancePartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceRelationsResolver.prototype, "partComputer", null);
MaintenanceRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Maintenance_1.Maintenance)
], MaintenanceRelationsResolver);
exports.MaintenanceRelationsResolver = MaintenanceRelationsResolver;
