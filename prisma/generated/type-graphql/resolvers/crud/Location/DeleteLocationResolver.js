"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLocationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteLocationArgs_1 = require("./args/DeleteLocationArgs");
const Location_1 = require("../../../models/Location");
const helpers_1 = require("../../../helpers");
let DeleteLocationResolver = class DeleteLocationResolver {
    async deleteLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Location_1.Location, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteLocationArgs_1.DeleteLocationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteLocationResolver.prototype, "deleteLocation", null);
DeleteLocationResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], DeleteLocationResolver);
exports.DeleteLocationResolver = DeleteLocationResolver;
