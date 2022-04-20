"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Computer_1 = require("../../../models/Computer");
const Program_1 = require("../../../models/Program");
const SoftwareComputer_1 = require("../../../models/SoftwareComputer");
const SoftwareComputerComputerArgs_1 = require("./args/SoftwareComputerComputerArgs");
const SoftwareComputerProgramArgs_1 = require("./args/SoftwareComputerProgramArgs");
const helpers_1 = require("../../../helpers");
let SoftwareComputerRelationsResolver = class SoftwareComputerRelationsResolver {
    async computer(softwareComputer, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.findUnique({
            where: {
                id_softwarecomputer: softwareComputer.id_softwarecomputer,
            },
        }).computer(args);
    }
    async program(softwareComputer, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.findUnique({
            where: {
                id_softwarecomputer: softwareComputer.id_softwarecomputer,
            },
        }).program(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Computer_1.Computer], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [SoftwareComputer_1.SoftwareComputer, Object, SoftwareComputerComputerArgs_1.SoftwareComputerComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerRelationsResolver.prototype, "computer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Program_1.Program], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [SoftwareComputer_1.SoftwareComputer, Object, SoftwareComputerProgramArgs_1.SoftwareComputerProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerRelationsResolver.prototype, "program", null);
SoftwareComputerRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => SoftwareComputer_1.SoftwareComputer)
], SoftwareComputerRelationsResolver);
exports.SoftwareComputerRelationsResolver = SoftwareComputerRelationsResolver;
