"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateComputerArgs_1 = require("./args/UpdateComputerArgs");
const Computer_1 = require("../../../models/Computer");
const helpers_1 = require("../../../helpers");
let UpdateComputerResolver = class UpdateComputerResolver {
    async updateComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Computer_1.Computer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateComputerArgs_1.UpdateComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateComputerResolver.prototype, "updateComputer", null);
UpdateComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Computer_1.Computer)
], UpdateComputerResolver);
exports.UpdateComputerResolver = UpdateComputerResolver;
