## Point of Sales
application that allows to make buying and selling
some features provided :
- CRUD Product
- CRUD Category
- Add or reduce product orders
- Search product by certain column
- Pagination
- Allowed CORS
- Able to test via Postman

## CRUD 
 ###### use postman to CRUD
akronim untuk Create, Read, Update, dan Delete
### creat product
This is to add product
```python
localhost:8080/api/v1/product/
```
- use the post method
- in postman go to the body -> form-data, and enter the key and value

### read product
This is to display all products
```python
localhost:8080/api/v1/product
```
- use the get method

### update product
This function is for editing data
```python
localhost:8080/api/v1/product/(id_product)
```
- use the patch method
- at the end of the url enter the product id that will be updated

### delete product
This function is to delete product data
```python
localhost:8080/api/v1/product/(id_product)
```
- use the delete method
- at the end of the url enter the product id that will be deleted
 

### creat category
This is to add category
```python
localhost:8080/api/v1/category/
```
- use the post method
- in postman go to the body -> form-data, and enter the key and value

### read product
This is to display all category
```python
localhost:8080/api/v1/category
```
- use the get method

### update product
This function is for editing data
```python
localhost:8080/api/v1/category/(id_category)
```
- use the patch method
- at the end of the url enter the category id that will be updated

### delete category
This function is to delete category data
```python
localhost:8080/api/v1/category/(id_category)
```
- use the delete method
- at the end of the url enter the category id that will be deleted


### sort product by name, category, and date of update
```python
localhost:8080/api/v1/product/sort/(name/categori/update)
```
- at the end of the url select a keyword (name/categori/update)

### Search product by name
```python
localhost:8080/api/v1/product/search/name_product
```
- at the end of the url enter the product name to find the product


### pagination
```python
localhost:8080/api/v1/product/page?page=(offset)
```
- at the end of the url enter the offset value

### orders
```phyton
localhost:8080/api/v1/order
```
- Enter key value to place an order

### checkout
```phyton
localhost:8080/api/v1/checkout
```
-Enter the specific order ID to checkout the order
