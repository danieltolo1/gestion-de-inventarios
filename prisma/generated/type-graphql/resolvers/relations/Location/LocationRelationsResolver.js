"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Computer_1 = require("../../../models/Computer");
const Location_1 = require("../../../models/Location");
const Product_1 = require("../../../models/Product");
const LocationComputerArgs_1 = require("./args/LocationComputerArgs");
const LocationPorductArgs_1 = require("./args/LocationPorductArgs");
const helpers_1 = require("../../../helpers");
let LocationRelationsResolver = class LocationRelationsResolver {
    async computer(location, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).location.findUnique({
            where: {
                id_location: location.id_location,
            },
        }).computer(args);
    }
    async porduct(location, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).location.findUnique({
            where: {
                id_location: location.id_location,
            },
        }).porduct(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Computer_1.Computer], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Location_1.Location, Object, LocationComputerArgs_1.LocationComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocationRelationsResolver.prototype, "computer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Location_1.Location, Object, LocationPorductArgs_1.LocationPorductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocationRelationsResolver.prototype, "porduct", null);
LocationRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], LocationRelationsResolver);
exports.LocationRelationsResolver = LocationRelationsResolver;
