"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProgramResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByProgramArgs_1 = require("./args/GroupByProgramArgs");
const Program_1 = require("../../../models/Program");
const ProgramGroupBy_1 = require("../../outputs/ProgramGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProgramResolver = class GroupByProgramResolver {
    async groupByProgram(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [ProgramGroupBy_1.ProgramGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProgramArgs_1.GroupByProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByProgramResolver.prototype, "groupByProgram", null);
GroupByProgramResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Program_1.Program)
], GroupByProgramResolver);
exports.GroupByProgramResolver = GroupByProgramResolver;
