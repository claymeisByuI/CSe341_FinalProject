# Goals
* Vehicle has a brand
* Aftermarket can deal with multiple vehicles
* Aftermarket sells parts for a brand
* Parts can fit multiple vehicles and multiple brands
* Technicians can certified for Brand
* User can be a Technician
* User can be a Customer
* User can be an Administrator


# Endpoints
* **Tables**
  * **Brands**
    * fields

  * **Vehicles**
    * fields

  * **AftermarketCompanies**
    * fields

  * **Parts**
    * fields

  * **Technicians**
    * fields

  * **Users**
    * fields


* **brands**
  * **POST** /brands
  * **PUT** /brands
  * **GET** /brands
  * **GET** /brands/findByCountry
  * **GET** /brands/findByName
  * **GET** /brands/{brandsId}
  * **DELETE** /brands/{brandsId}

* **vehicles**
  * **POST** /vehicles
  * **PUT** /vehicles
  * **GET** /vehicles
  * **GET** /vehicles/findByBrand
  * **GET** /vehicles/findByYear
  * **GET** /vehicles/findByType
  * **GET** /vehicles/{vehiclesId}
  * **DELETE** /vehicles/{vehiclesId}
  
* **aftermarketCompanies**
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



