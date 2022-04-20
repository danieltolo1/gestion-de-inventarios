"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaintenanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateMaintenanceArgs_1 = require("./args/CreateMaintenanceArgs");
const Maintenance_1 = require("../../../models/Maintenance");
const helpers_1 = require("../../../helpers");
let CreateMaintenanceResolver = class CreateMaintenanceResolver {
    async createMaintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Maintenance_1.Maintenance, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateMaintenanceArgs_1.CreateMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateMaintenanceResolver.prototype, "createMaintenance", null);
CreateMaintenanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Maintenance_1.Maintenance)
], CreateMaintenanceResolver);
exports.CreateMaintenanceResolver = CreateMaintenanceResolver;
