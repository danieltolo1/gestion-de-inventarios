"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySoftwareComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupBySoftwareComputerArgs_1 = require("./args/GroupBySoftwareComputerArgs");
const SoftwareComputer_1 = require("../../../models/SoftwareComputer");
const SoftwareComputerGroupBy_1 = require("../../outputs/SoftwareComputerGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySoftwareComputerResolver = class GroupBySoftwareComputerResolver {
    async groupBySoftwareComputer(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [SoftwareComputerGroupBy_1.SoftwareComputerGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupBySoftwareComputerArgs_1.GroupBySoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupBySoftwareComputerResolver.prototype, "groupBySoftwareComputer", null);
GroupBySoftwareComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => SoftwareComputer_1.SoftwareComputer)
], GroupBySoftwareComputerResolver);
exports.GroupBySoftwareComputerResolver = GroupBySoftwareComputerResolver;
