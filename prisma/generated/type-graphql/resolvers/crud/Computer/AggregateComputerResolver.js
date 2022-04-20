"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateComputerArgs_1 = require("./args/AggregateComputerArgs");
const Computer_1 = require("../../../models/Computer");
const AggregateComputer_1 = require("../../outputs/AggregateComputer");
const helpers_1 = require("../../../helpers");
let AggregateComputerResolver = class AggregateComputerResolver {
    async aggregateComputer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateComputer_1.AggregateComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateComputerArgs_1.AggregateComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateComputerResolver.prototype, "aggregateComputer", null);
AggregateComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Computer_1.Computer)
], AggregateComputerResolver);
exports.AggregateComputerResolver = AggregateComputerResolver;
