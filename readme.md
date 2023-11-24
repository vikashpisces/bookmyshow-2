# Project: Bookmyshow case study II

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** 

- [Overview](#overview)
  - [API Endpoints](#api-endpoints)
- [Installation](#installation)
  - [Clone this repository using command](#clone-this-repository-using-command)
  - [Install required dependencies using command:](#install-required-dependencies-using-command)
  - [Audit installed dependencies using below command (fix the dependencies if any vulnerabilities found)](#audit-installed-dependencies-using-below-command-fix-the-dependencies-if-any-vulnerabilities-found)
- [Usage](#usage)
  - [Create a file .env with the following content (Modify the configuration as per your requirement)](#create-a-file-env-with-the-following-content-modify-the-configuration-as-per-your-requirement)
  - [Start the server using command:](#start-the-server-using-command)
  - [Run command to populate the database](#run-command-to-populate-the-database)
- [Reference Links](#reference-links)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Overview
As part of this assignment, we need to build API’s for the following features in frontend:
- As a user, I can select any theatre in the city. On selecting the theatre, I should be able to see the dates of next 7 days.
- I can click on any date and the page should load to give me all the movies in that theatre on that given date. Movies should contain details of all the showtimes.The image represents the feature described on the previous page.

You have to code the APIs along with appropriate table structures for powering this UI.

Expected output of this assignment will be code submitted on github PR for all three questions. Parts that need subjective answers should be added to a doc and pushed to the top level git directory.

It’s been 2 years since you built this API. The API overtime has become slow. Which columns would you index to improve the performance of the API ? Why ?

You have noticed that even after indexing the columns the API speed isn’t under 100 ms. Update the code of existing API to cache the appropriate data in the redis. What all data would you cache and why ?

Create an API to book seats for you and you friend for a given theatre and a show.

### API Endpoints
| Method | Endpoint                                 | Description                                 |
|--------|------------------------------------------|---------------------------------------------|
| POST   | /user/register                           | Register a new user                         |
| POST   | /user/login                              | Login a registered user                     |
| GET    | /theatres?city=:city                     | Get list of theatres by city                |
| GET    | /cities?state=:state                     | Get list of cities by state                 |
| GET    | /shows?theatre=:theatre&date=:date       | Get list of shows in a theatre and on given date |
| POST   | /bookings                                | Book seats for a given theatre and a show        |

## Installation

### Clone this repository using command

  git clone <repository_url> 

### Install required dependencies using command:
```npm install ```

### Audit installed dependencies using below command (fix the dependencies if any vulnerabilities found)
```npm audit ```

## Usage

### Create a file .env with the following content (Modify the configuration as per your requirement)
```
  PORT=1234
  MYSQL_HOST=MYSQL_HOST
  MYSQL_PORT=MYSQL_PORT
  MYSQL_USER=MYSQL_USER
  MYSQL_PWD=MYSQL_PWD
  HASH_SECRET=HASH_SECRET
  JWT_SECRET=JWT_SECRET
```

### Start the server using command:
```npm run start:dev```

### Run command to populate the database
```npm run seed```

## Reference Links
- [doctoc](https://www.npmjs.com/package/doctoc)