const mongoose = require('mongoose');
require('dotenv').config();

const Brand = require('./models/brandsModel');
const Vehicle = require('./models/vehicleModel');
const Part = require('./models/partsModel');
const CarDealerFranchise = require('./models/CarDealerFranchise'); // Import model
const User = require('./models/userModel');

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
    console.error("Error: MONGODB_URI is undefined. Check your .env file.");
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.error('Database connection error:', err));

const seedDatabase = async () => {
    try {
        await mongoose.connection.dropDatabase(); // Clears the database before seeding
        console.log('Database cleared.');

        // Declare brands variable before usage
        let brands;

        // Insert brands
        brands = await Brand.insertMany([
            { name: 'Toyota', country: 'Japan', startingDate: new Date('1937-08-28'), headquarters: 'Toyota City, Japan', founders: ['Kiichiro Toyoda'] },
            { name: 'Ford', country: 'USA', startingDate: new Date('1903-06-16'), headquarters: 'Dearborn, Michigan, USA', founders: ['Henry Ford'] }
        ]);
        console.log('Brands seeded:', brands);

        // Ensure brands are available before inserting vehicles
        if (!brands || brands.length < 2) {
            throw new Error("Brands were not seeded correctly.");
        }

        // Convert Brand IDs properly
        const toyotaId = brands[0]._id;
        const fordId = brands[1]._id;

        // Insert vehicles with correctly formatted ObjectIds
        const vehicles = await Vehicle.insertMany([
            { Name: 'Corolla', Brand: toyotaId, Year: 2022, Type: 'Sedan', Description: 'Reliable and fuel-efficient', Engine_type: 'Inline-4', Fuel_type: 'Gasoline', Transmission: 'Automatic', colors_available: ['Red', 'Blue', 'Black'] },
            { Name: 'F-150', Brand: fordId, Year: 2023, Type: 'Truck', Description: 'Powerful work truck', Engine_type: 'V8', Fuel_type: 'Gasoline', Transmission: 'Automatic', colors_available: ['White', 'Black', 'Silver'] }
        ]);
        console.log('Vehicles seeded:', vehicles);

        // Insert users (fix casing of "UserName" and ensure "Admin" is valid)
        const users = await User.insertMany([
            { UserName: 'admin1', Email: 'admin@example.com', FirstName: 'John', LastName: 'Doe', AccountType: 'Admin', PhoneNumber: '555-1234', PasswordHash: 'hashedpassword' },
            { UserName: 'user1', Email: 'user@example.com', FirstName: 'Jane', LastName: 'Smith', AccountType: 'User', PhoneNumber: '555-5678', PasswordHash: 'hashedpassword' }
        ]);
        console.log('Users seeded:', users);


        // Insert Car Dealer Franchises
const carDealerFranchises = await CarDealerFranchise.insertMany([
    {
        name: 'AutoNation Toyota',
        brand: toyotaId, // Correct reference
        address: '123 Main St',
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA',
        phoneNumber: '555-123-4567',
        emails: ['contact@autonationtoyota.com']
    },
    {
        name: 'Ford Dealership',
        brand: fordId, // Correct reference
        address: '456 Ford St',
        city: 'Detroit',
        state: 'MI',
        country: 'USA',
        phoneNumber: '555-987-6543',
        emails: ['contact@forddealership.com']
    }
]);
console.log('Car Dealer Franchises seeded:', carDealerFranchises);


        console.log('Database seeding completed successfully.');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding database:', err);
        mongoose.connection.close();
    }
};

seedDatabase();
