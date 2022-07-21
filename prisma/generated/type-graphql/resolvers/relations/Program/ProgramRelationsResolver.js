"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Computer_1 = require("../../../models/Computer");
const Program_1 = require("../../../models/Program");
const ProgramComputerArgs_1 = require("./args/ProgramComputerArgs");
const helpers_1 = require("../../../helpers");
let ProgramRelationsResolver = class ProgramRelationsResolver {
    async computer(program, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).program.findUnique({
            where: {
                id_program: program.id_program,
            },
        }).computer(args);
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
    (0, tslib_1.__metadata)("design:paramtypes", [Program_1.Program, Object, ProgramComputerArgs_1.ProgramComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramRelationsResolver.prototype, "computer", null);
ProgramRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Program_1.Program)
], ProgramRelationsResolver);
exports.ProgramRelationsResolver = ProgramRelationsResolver;
