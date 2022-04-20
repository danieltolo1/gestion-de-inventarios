"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProgramResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProgramArgs_1 = require("./args/AggregateProgramArgs");
const Program_1 = require("../../../models/Program");
const AggregateProgram_1 = require("../../outputs/AggregateProgram");
const helpers_1 = require("../../../helpers");
let AggregateProgramResolver = class AggregateProgramResolver {
    async aggregateProgram(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).program.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProgram_1.AggregateProgram, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProgramArgs_1.AggregateProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateProgramResolver.prototype, "aggregateProgram", null);
AggregateProgramResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Program_1.Program)
], AggregateProgramResolver);
exports.AggregateProgramResolver = AggregateProgramResolver;
