"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Program_1 = require("../../../models/Program");
const SoftwareComputer_1 = require("../../../models/SoftwareComputer");
const helpers_1 = require("../../../helpers");
let ProgramRelationsResolver = class ProgramRelationsResolver {
    async softwarecomputer(program, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).program.findUnique({
            where: {
                id_program: program.id_program,
            },
        }).softwarecomputer({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => SoftwareComputer_1.SoftwareComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Program_1.Program, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramRelationsResolver.prototype, "softwarecomputer", null);
ProgramRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Program_1.Program)
], ProgramRelationsResolver);
exports.ProgramRelationsResolver = ProgramRelationsResolver;
