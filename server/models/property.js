import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: {type: String, required: true},
	created: {type: Number, default: Date.now()},
	propertyId: {type: ObjectId, ref: models.property.name, required: true},
	isSold: {type: Boolean, required: true},
    conditionalOffer: {type: Boolean, required: true},
    activeListing: {type: Boolean, required: true},
    isFeature: {type: Boolean},
    //propertyType: {type: }
    // Relations
    listingPrice: {type: Number, required: true},
    redirectionUrl: {type: String, required: true},
    address: {type: String, required: true},
    lotSize: {type: String, required: true},
    legal: {type: String, required: true},
    directions: {type: String, required: true},
    taxes: {type: Number, required: true},
    year: {type: Number, required: true},
    survey:  {type: String, required: true},
    propertyDisclosure:  {type: String, required: true},
    use:  {type: String, required: true},
    title: {type: String, required: true},
    water: {type: Boolean, required: true},
    sewer: {type: Boolean, required: true},
    basement: {type: Boolean, required: true},
    propSize: {type: String, required: true},
    siteInfluences: {type: String, required: true},
    waterfront: {type: Boolean, required: true},
    bodyOfWater: {type: Boolean, required: true},
    numStories: {type: Number, required: true},
    frontage: {type: String, required: true},
    buildingDiv: {type: String, required: true},
    totalArea: {type: String, required: true},
    officeArea: {type: String, required: true},
    whseArea: {type: String, required: true},
    ceiling: {type: String, required: true},
    construction: {type: String, required: true},
    power:  {type: Boolean, required: true},
    amps: {type: Number, required: true},
    heatAir: {type: Boolean, required: true},
    whseHeatAir: {type: Boolean, required: true},
    fuel:  {type: String, required: true},
    loading:  {type: String, required: true},
    numRentalUnits: {type: Number, required: true},
    area:  {type: String, required: true},
    features:  {type: String, required: true},
    mortage: {type: Number, required: true},
    exclusions:  {type: String, required: true},
    remarks:  {type: String, required: true},
    agreement: {type: String, required: true},
    occupants: {type: Number, required: true},
    howShown:  {type: String, required: true},
    salePrice: {type: Number, required: true},
    saleDate: {type: Number, required: true}
	
});

module.exports = mongoose.model(models.property.name, schema);