"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Computer_1 = require("../../../models/Computer");
const Location_1 = require("../../../models/Location");
const Maintenance_1 = require("../../../models/Maintenance");
const Program_1 = require("../../../models/Program");
const SoftwareComputer_1 = require("../../../models/SoftwareComputer");
const State_1 = require("../../../models/State");
const ComputerMaintenanceArgs_1 = require("./args/ComputerMaintenanceArgs");
const ComputerProgramArgs_1 = require("./args/ComputerProgramArgs");
const helpers_1 = require("../../../helpers");
let ComputerRelationsResolver = class ComputerRelationsResolver {
    async state(computer, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.findUnique({
            where: {
                id_computer: computer.id_computer,
            },
        }).state({});
    }
    async softwarecomputer(computer, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.findUnique({
            where: {
                id_computer: computer.id_computer,
            },
        }).softwarecomputer({});
    }
    async location(computer, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.findUnique({
            where: {
                id_computer: computer.id_computer,
            },
        }).location({});
    }
    async maintenance(computer, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.findUnique({
            where: {
                id_computer: computer.id_computer,
            },
        }).maintenance(args);
    }
    async program(computer, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.findUnique({
            where: {
                id_computer: computer.id_computer,
            },
        }).program(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => State_1.State, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Computer_1.Computer, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerRelationsResolver.prototype, "state", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => SoftwareComputer_1.SoftwareComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Computer_1.Computer, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerRelationsResolver.prototype, "softwarecomputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Location_1.Location, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Computer_1.Computer, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerRelationsResolver.prototype, "location", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Maintenance_1.Maintenance], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Computer_1.Computer, Object, ComputerMaintenanceArgs_1.ComputerMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerRelationsResolver.prototype, "maintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Program_1.Program], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Computer_1.Computer, Object, ComputerProgramArgs_1.ComputerProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerRelationsResolver.prototype, "program", null);
ComputerRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Computer_1.Computer)
], ComputerRelationsResolver);
exports.ComputerRelationsResolver = ComputerRelationsResolver;
