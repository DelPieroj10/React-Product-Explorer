##📌 Project: Product Explorer with Filters, Search and Pagination##

🎯 Objective:

- Build an app in React that consumes a public product API and allows:

- Show products in grid format
- Search by name
- Filter by category
- Sort by price
- Implement pagination
- Handle load and error states

🌐 API tio use:

We will use:

👉 https://fakestoreapi.com/products

Endpoint: https://fakestoreapi.com/products

Example:

All products:
https://fakestoreapi.com/products

Categories:
https://fakestoreapi.com/products/categories

By categories:
https://fakestoreapi.com/products/category/:category

🧩 Functional Requirements
1️⃣ Main view

- Show products in a responsive grid
- Each product must show:
- Image
- Qualification
- Price
- Category
- Rating (if you decide to include it, add points)

2️⃣ Search

- Input to search for products by name
- Real-time filtering (without calling the API again)

3️⃣ Filter by category

- Select with categories obtained from the API
- You must update the product list

4️⃣ Ordering

Button or select section to sort by:

- Low to high price
- Price high to low

5️⃣ Pagination (local)

Show 6 products per page

- Buttons:
- Next
- Previous
- Show current page number

6️⃣ Mandatory States

- Loading
- Mistake
- No results