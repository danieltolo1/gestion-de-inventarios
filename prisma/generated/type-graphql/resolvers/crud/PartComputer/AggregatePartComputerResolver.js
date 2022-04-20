"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePartComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregatePartComputerArgs_1 = require("./args/AggregatePartComputerArgs");
const PartComputer_1 = require("../../../models/PartComputer");
const AggregatePartComputer_1 = require("../../outputs/AggregatePartComputer");
const helpers_1 = require("../../../helpers");
let AggregatePartComputerResolver = class AggregatePartComputerResolver {
    async aggregatePartComputer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregatePartComputer_1.AggregatePartComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregatePartComputerArgs_1.AggregatePartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregatePartComputerResolver.prototype, "aggregatePartComputer", null);
AggregatePartComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => PartComputer_1.PartComputer)
], AggregatePartComputerResolver);
exports.AggregatePartComputerResolver = AggregatePartComputerResolver;
