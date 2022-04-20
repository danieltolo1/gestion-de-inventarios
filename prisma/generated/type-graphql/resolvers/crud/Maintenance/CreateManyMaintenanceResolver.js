"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMaintenanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateManyMaintenanceArgs_1 = require("./args/CreateManyMaintenanceArgs");
const Maintenance_1 = require("../../../models/Maintenance");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyMaintenanceResolver = class CreateManyMaintenanceResolver {
    async createManyMaintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyMaintenanceArgs_1.CreateManyMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateManyMaintenanceResolver.prototype, "createManyMaintenance", null);
CreateManyMaintenanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Maintenance_1.Maintenance)
], CreateManyMaintenanceResolver);
exports.CreateManyMaintenanceResolver = CreateManyMaintenanceResolver;
