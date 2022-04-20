"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySoftwareComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManySoftwareComputerArgs_1 = require("./args/FindManySoftwareComputerArgs");
const SoftwareComputer_1 = require("../../../models/SoftwareComputer");
const helpers_1 = require("../../../helpers");
let FindManySoftwareComputerResolver = class FindManySoftwareComputerResolver {
    async softwareComputers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [SoftwareComputer_1.SoftwareComputer], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManySoftwareComputerArgs_1.FindManySoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManySoftwareComputerResolver.prototype, "softwareComputers", null);
FindManySoftwareComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => SoftwareComputer_1.SoftwareComputer)
], FindManySoftwareComputerResolver);
exports.FindManySoftwareComputerResolver = FindManySoftwareComputerResolver;
