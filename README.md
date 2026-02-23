
# React-Product-Explorer
 **React** application that consumes an external product API, allowing us to display products and filter them by name, category, and price.


### Features
- Fetch users from external API
- Search products by name (debounced input)
- Filter by category
- Sort by price (ascending / descending)
- Client-side pagination with reusable hook
- Clean and reusable component architecture
- Clean and reusable component architecture
- Query params persistence (if implemented)
- Controlled modal for product details
- Defensive pagination logic (out-of-range protection)
- Skeleton loading state for better UX

### Tech Stack
- React
- Vite
- JavaScript (ES6+)
- CSS
- Fetch API

### Architecture Overview

The project follows the separation of concerns principles:

🔹 productsApi.js → API layer (data fetching)
🔹 useProducts.js → Business logic (filtering, sorting)
🔹 usePagination.js → Pagination logic abstraction
🔹 UI components:
  - Filters
  - ProductGrid
  - ProductCard
  - Pagination
  - SkeletonGrid

This keeps logic decoupled from presentation and improves scalability.

### Concepts Applied
- Custom Hooks
- Hook Composition
- useMemo for performance optimization
- State lifting
- Debouncing with useEffect
- Conditional rendering
- Controlled components
- Separation of concerns
- Client-side pagination
- Defensive state handling
- Component-driven architecture

### Possible Improvements (Future Enhancements)
🔹 Server-side pagination
🔹 Product detail page with React Router
🔹 Unit testing (Vitest / React Testing Library)
🔹 Global state management if scaling
🔹 Better accessibility (ARIA roles)
🔹 Dark mode

### Installation:
git clone https://github.com/your-username/react-product-explorer.git
cd react-product-explorer
npm install
npm run dev


Author

Jean Piero Parra Bustamante
Frontend Developer – React
## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
