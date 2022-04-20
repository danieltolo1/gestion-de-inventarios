"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProgramResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateProgramArgs_1 = require("./args/UpdateProgramArgs");
const Program_1 = require("../../../models/Program");
const helpers_1 = require("../../../helpers");
let UpdateProgramResolver = class UpdateProgramResolver {
    async updateProgram(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Program_1.Program, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateProgramArgs_1.UpdateProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateProgramResolver.prototype, "updateProgram", null);
UpdateProgramResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Program_1.Program)
], UpdateProgramResolver);
exports.UpdateProgramResolver = UpdateProgramResolver;
