"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const MovimientoInventario_1 = require("../../../models/MovimientoInventario");
const Session_1 = require("../../../models/Session");
const User_1 = require("../../../models/User");
const UserAccountsArgs_1 = require("./args/UserAccountsArgs");
const UserMovimientosArgs_1 = require("./args/UserMovimientosArgs");
const UserSessionsArgs_1 = require("./args/UserSessionsArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async accounts(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).accounts(args);
    }
    async sessions(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).sessions(args);
    }
    async movimientos(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).movimientos(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Account_1.Account], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object, UserAccountsArgs_1.UserAccountsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "accounts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Session_1.Session], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object, UserSessionsArgs_1.UserSessionsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "sessions", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [MovimientoInventario_1.MovimientoInventario], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [User_1.User, Object, UserMovimientosArgs_1.UserMovimientosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRelationsResolver.prototype, "movimientos", null);
UserRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
