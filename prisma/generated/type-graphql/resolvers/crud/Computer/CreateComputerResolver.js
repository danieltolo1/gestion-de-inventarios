"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateComputerArgs_1 = require("./args/CreateComputerArgs");
const Computer_1 = require("../../../models/Computer");
const helpers_1 = require("../../../helpers");
let CreateComputerResolver = class CreateComputerResolver {
    async createComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Computer_1.Computer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateComputerArgs_1.CreateComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateComputerResolver.prototype, "createComputer", null);
CreateComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Computer_1.Computer)
], CreateComputerResolver);
exports.CreateComputerResolver = CreateComputerResolver;
