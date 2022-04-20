"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMaintenanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueMaintenanceArgs_1 = require("./args/FindUniqueMaintenanceArgs");
const Maintenance_1 = require("../../../models/Maintenance");
const helpers_1 = require("../../../helpers");
let FindUniqueMaintenanceResolver = class FindUniqueMaintenanceResolver {
    async maintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Maintenance_1.Maintenance, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueMaintenanceArgs_1.FindUniqueMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindUniqueMaintenanceResolver.prototype, "maintenance", null);
FindUniqueMaintenanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Maintenance_1.Maintenance)
], FindUniqueMaintenanceResolver);
exports.FindUniqueMaintenanceResolver = FindUniqueMaintenanceResolver;
