# CSE 341 Final project Proposal
General Info
### Student Names:
  * Clayton Meisman
  * Victor Manuel Malpica Castro
  * Johann Helaman Tellez Rodriguez
  * Ivan David Ponce Lopez

### Commercial Vehicle Information Database
#### What will the API do?
The API will process information of vehicle brands, aftermarket companies, vehicles and vehicle parts.

#### How will your API utilize a login system?
The login system is used for administrative personal to edit and create information in the database, meanwhile the other levels give access to the information of vehicles and their spare parts.

#### What database will you use?
MongoDB.

#### How will the data be stored in your database?
JSON documents classified by collections.
#### COLLECTIONS
* **Tables**
  * **Brands**
    * _Id
    * Name <string>
    * Country <string>
    * StartingDate	_Id
    *	Logo image? (Base64)
    * Headquarters location
    * Founders


  * **Vehicles**
    * _Id
    * Year
    * Name
    * Brand
    * Type ENUM
    * Description
    * colors available
    * Engine type
    * Fuel type
    * Transmission (Manual, automatic)

  * **AftermarketCompanies**
    * _Id
    * Name
    * Address 
    * City, 
    * State
    * Country
    * Brands work with
    * Certified Mechanics
    * Vehicles

  * **Parts**
    * _Id
    * Name
    * Brand
    * Vehicles
    * Quality

  * **CarDealerFranchise**
    * _Id
    * Name
    * Brand
    * Address 
    * City, 
    * State
    * Country
    * PhoneNumber
    * Emails

  * **Users**
    * _Id
    * UserName
    * Email
    * First Name
    * Last Name
    * Account Type [Admin, User, Mechanic]
    * PhoneNumber
    * Password Hash




#### How would a frontend be able to manage authentication state based on the data you provide?
Use OAuth 2.0 placed in the header

#### What pieces of data in your app will need to be secured? How will you demonstrate web security principles in the development of this app?
The ability to edit and create information, also the parts collections which will be only be available to the technician users. Consumers will only have access to the brands and vehicles.

#### What file structure and program architecture will you use for this project (how will you organize your node project)? Why?
Use Standard MVC for the backend to provide organization and standardization throughout the project.

#### What are potential stretch challenges that you could implement to go above and beyond?
Extend Authentication to include Authorizing of users to read and write extra data.
For example technicians can view details on parts and not just the prices for sales.


#### API Endpoint Planning
As a placeholder you can view the API here:[editor.swagger.io](https://editor.swagger.io) 

## Goals
* Vehicle has a brand
* Aftermarket can deal with multiple vehicles
* Aftermarket sells parts for a brand
* Parts can fit multiple vehicles and multiple brands
* Technicians can certified for Brand
* User can be a Technician
* User can be a Customer
* User can be an Administrator


## Endpoints
* **Brands**
  * **POST** /brands
  * **PUT** /brands
  * **GET** /brands
  * **GET** /brands/findByCountry
  * **GET** /brands/findByName
  * **GET** /brands/{brandsId}
  * **DELETE** /brands/{brandsId}

* **Vehicles**
  * **POST** /vehicles
  * **PUT** /vehicles
  * **GET** /vehicles
  * **GET** /vehicles/findByBrand
  * **GET** /vehicles/findByYear
  * **GET** /vehicles/findByType
  * **GET** /vehicles/{vehiclesId}
  * **DELETE** /vehicles/{vehiclesId}
  
* **AftermarketCompanies**
  * **POST** /aftermarketComp
  * **PUT** /aftermarketComp
  * **GET** /aftermarketComp
  * **GET** /aftermarketComp/findByBrand
  * **GET** /aftermarketComp/findByVehicle
  * **GET** /aftermarketComp/{aftermarketId}
  * **DELETE** /aftermarketComp/{aftermarketId}

* **parts**
  * **POST** /parts
  * **PUT** /parts
  * **GET** /parts
  * **GET** /parts/findByBrand
  * **GET** /parts/findByVehicle
  * **GET** /parts/findByQuality
  * **GET** /parts/{partsId}
  * **DELETE** /parts/{partsId}

* **carDealerFranchise**
  * **POST** /carDealerFranchise
  * **PUT** /carDealerFranchise
  * **GET** /carDealerFranchise
  * **GET** /carDealerFranchise/findByBrand
  * **GET** /carDealerFranchise/{franchiseId}
  * **DELETE** /carDealerFranchise/{franchiseId}

* **users**
  * **POST** /user
  * **POST** /user/createWithArray
  * **POST** /user/createWithList
  * **GET** /user/login
  * **GET** /user/logout
  * **GET** /users/findByType
  * **GET** /user/{username}
  * **PUT** /user/{username}
  * **DELETE** /user/{username}


| DONE | TASK                                                 | Assigned to           |
|-----| ---------------------------------------------------- | --------------------- |
|  ✅| Node.js project creation                             | Done on 1/29 in Group |
|  ✅| Create git repo and share with group                 | Done on 1/29 in Group |
|  ✅ | Render.com server | Victor | 
| ✅  | MongoDB setup                                        | Victor                |
| ✅  | Populate Mongodb Database                            | Victor                |
| ✅  | API Swagger documentation for all API routes         | Clayton               |
| ✅  | Users Controller                                     | Johann                |
| ✅  | Parts Controller                                     | Ivan                  |
|     | Brands Controller                                    | Clayton               |
|     | CarDealershipFranchise Controller                    | Victor                |
| ✅  | Vehicle Controller                                   | Johann                |
|     | Aftermarket Controller                               | Ivan                  |
|     | OAuth and Data restrictions                          | Group                 |
|     | Video presentation of node project,                  |                       |
|     | all routes functioning, mongoDB data being modified, |                       |
|     | and API documentation.                               |                       |
