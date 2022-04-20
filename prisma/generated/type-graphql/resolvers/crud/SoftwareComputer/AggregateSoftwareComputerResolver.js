"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSoftwareComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateSoftwareComputerArgs_1 = require("./args/AggregateSoftwareComputerArgs");
const SoftwareComputer_1 = require("../../../models/SoftwareComputer");
const AggregateSoftwareComputer_1 = require("../../outputs/AggregateSoftwareComputer");
const helpers_1 = require("../../../helpers");
let AggregateSoftwareComputerResolver = class AggregateSoftwareComputerResolver {
    async aggregateSoftwareComputer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateSoftwareComputer_1.AggregateSoftwareComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateSoftwareComputerArgs_1.AggregateSoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateSoftwareComputerResolver.prototype, "aggregateSoftwareComputer", null);
AggregateSoftwareComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => SoftwareComputer_1.SoftwareComputer)
], AggregateSoftwareComputerResolver);
exports.AggregateSoftwareComputerResolver = AggregateSoftwareComputerResolver;
