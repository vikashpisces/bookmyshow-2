## Question 1: It’s been 2 years since you built this API. The API overtime has become slow. Which columns would you index to improve the performance of the API ? Why ?

All the queries had where clause for filtering data. If we ensure these tables are indexed on those where claused columns, it would surely improve the API performance from the query execution time perspective.

For example: API /city filters on state, /theatres filters on city, /shows filters on theatre. Looking at the query execution time we can:
- Index stateId Column in City table
- Index cityId column in Theatre Table
- Index TheatreId column in Movie Table

## Question 2: You have noticed that even after indexing the columns the API speed isn’t under 100 ms. Update the code of existing API to cache the appropriate data in the redis. What all data would you cache and why ?

Caching surely can help in optimizing the api performance. Any data which is not going to change in a while can be cached instead of querying the DB.
We can try caching:
- City Data for longer expiry
- Theatres Data with 1 Day expiry
- Shows Data with 1h expiry
- ShowTime data with 10mins expiry
