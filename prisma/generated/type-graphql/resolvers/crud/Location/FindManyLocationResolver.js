"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyLocationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyLocationArgs_1 = require("./args/FindManyLocationArgs");
const Location_1 = require("../../../models/Location");
const helpers_1 = require("../../../helpers");
let FindManyLocationResolver = class FindManyLocationResolver {
    async locations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Location_1.Location], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyLocationArgs_1.FindManyLocationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyLocationResolver.prototype, "locations", null);
FindManyLocationResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], FindManyLocationResolver);
exports.FindManyLocationResolver = FindManyLocationResolver;
