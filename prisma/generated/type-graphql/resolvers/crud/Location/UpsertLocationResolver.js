"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertLocationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertLocationArgs_1 = require("./args/UpsertLocationArgs");
const Location_1 = require("../../../models/Location");
const helpers_1 = require("../../../helpers");
let UpsertLocationResolver = class UpsertLocationResolver {
    async upsertLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Location_1.Location, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertLocationArgs_1.UpsertLocationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpsertLocationResolver.prototype, "upsertLocation", null);
UpsertLocationResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], UpsertLocationResolver);
exports.UpsertLocationResolver = UpsertLocationResolver;
