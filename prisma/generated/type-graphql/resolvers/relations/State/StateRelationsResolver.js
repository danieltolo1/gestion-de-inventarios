"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Computer_1 = require("../../../models/Computer");
const Product_1 = require("../../../models/Product");
const State_1 = require("../../../models/State");
const StateComputerArgs_1 = require("./args/StateComputerArgs");
const StateProductArgs_1 = require("./args/StateProductArgs");
const helpers_1 = require("../../../helpers");
let StateRelationsResolver = class StateRelationsResolver {
    async product(state, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).state.findUnique({
            where: {
                id_state: state.id_state,
            },
        }).product(args);
    }
    async computer(state, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).state.findUnique({
            where: {
                id_state: state.id_state,
            },
        }).computer(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [State_1.State, Object, StateProductArgs_1.StateProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateRelationsResolver.prototype, "product", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Computer_1.Computer], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [State_1.State, Object, StateComputerArgs_1.StateComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateRelationsResolver.prototype, "computer", null);
StateRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => State_1.State)
], StateRelationsResolver);
exports.StateRelationsResolver = StateRelationsResolver;
