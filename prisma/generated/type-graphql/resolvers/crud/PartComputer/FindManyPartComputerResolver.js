"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPartComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyPartComputerArgs_1 = require("./args/FindManyPartComputerArgs");
const PartComputer_1 = require("../../../models/PartComputer");
const helpers_1 = require("../../../helpers");
let FindManyPartComputerResolver = class FindManyPartComputerResolver {
    async partComputers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [PartComputer_1.PartComputer], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyPartComputerArgs_1.FindManyPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyPartComputerResolver.prototype, "partComputers", null);
FindManyPartComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => PartComputer_1.PartComputer)
], FindManyPartComputerResolver);
exports.FindManyPartComputerResolver = FindManyPartComputerResolver;
