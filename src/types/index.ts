export interface ILocation {
  '@Name': string
}

export interface IVehRentalCore {
  '@PickUpDateTime': string
  '@ReturnDateTime': string
  PickUpLocation: ILocation
  ReturnLocation: ILocation
}

export interface IVendor {
  '@Code': string
  '@Name': string
}

export interface IVehMakeModel {
  '@Name': string
}

export interface IVehicle {
  '@AirConditionInd': string
  '@TransmissionType': string
  '@FuelType': string
  '@DriveType': string
  '@PassengerQuantity': string
  '@BaggageQuantity': string
  '@Code': string
  '@CodeContext': string
  '@DoorCount': string
  '@Size'?: string
  VehMakeModel: IVehMakeModel
  PictureURL: string
}

export interface ITotalCharge {
  '@RateTotalAmount': string
  '@EstimatedTotalAmount': string
  '@CurrencyCode': string
}

export interface IVehAvail {
  '@Status': string
  Vehicle: IVehicle
  TotalCharge: ITotalCharge
}

export interface IVehVendorAvail {
  Vendor: IVendor
  VehAvails: IVehAvail[]
}

export interface IVehAvailRSCore {
  VehRentalCore: IVehRentalCore
  VehVendorAvails: IVehVendorAvail[]
}

export interface ICarRentalResponse {
  VehAvailRSCore: IVehAvailRSCore
}

// Helper type for currency formatting
export type CurrencyCode = 'CAD' | 'USD' | 'EUR' // Add more as needed

// Enums for consistent values
export enum TransmissionType {
  Automatic = 'Automatic',
  Manual = 'Manual',
}

export enum FuelType {
  Petrol = 'Petrol',
  Diesel = 'Diesel',
  Electric = 'Electric',
  Hybrid = 'Hybrid',
}

export enum VehicleStatus {
  Available = 'Available',
  Unavailable = 'Unavailable',
}
