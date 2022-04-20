"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Location_1 = require("../../../models/Location");
const PartComputer_1 = require("../../../models/PartComputer");
const LocationPartComputerArgs_1 = require("./args/LocationPartComputerArgs");
const helpers_1 = require("../../../helpers");
let LocationRelationsResolver = class LocationRelationsResolver {
    async partComputer(location, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).location.findUnique({
            where: {
                id_location: location.id_location,
            },
        }).partComputer(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [PartComputer_1.PartComputer], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Location_1.Location, Object, LocationPartComputerArgs_1.LocationPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocationRelationsResolver.prototype, "partComputer", null);
LocationRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], LocationRelationsResolver);
exports.LocationRelationsResolver = LocationRelationsResolver;
