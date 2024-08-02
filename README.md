# Telda Task

> This App is an app for displaying movies, search on movie and watch its trailer.

## 🚀 Live Demo

The live demo [link](https://cineflicksapp.netlify.app/) deployed on Netlify.

## Description

- Initialized the app using `vite` with `TypeScript` and `Tailwind`.
- Used `React Router` as the main router.
- Utilized `TanStack React Query` to fetch and manage data, including loading and error states.
- Added a `Movies Page` with `pagination` and a responsive design.
- Added a `Details Page` for specific movies, displaying trailers in a `Modal`.
- Implemented `search functionality` with `Search Params` on the movie page, including pagination.
- Added `lazy loading` to images to increase UX and performance.
- Added `unit tests` using `React Testing Library` for components.
- Deploy on `netlify`.

## Reason behind technical decisions

- Created a shared component for search across pages to improve user experience.
- Utilized Search Params for the search query and page number, making it easier for users to return to the same page with the search results when reloading the page.
- Implemented the search function to trigger on Enter key press, reducing backend requests, and ensured that deleting the search input returns the user to the Movie Page.
- Developed a shared Navbar across application pages for future enhancements.
- Employed TanStack React Query to efficiently manage the state of data (loading, error, fetching, etc.).
- Integrated the Movie Trailer Library to fetch and display YouTube trailers for movies.
- Designed a Modal that pops up when the user clicks the play button on the Details Page, allowing them to watch the trailer and enhancing the user experience.
- Added lazy loading to images to enhance user experience and app performance.

### Trade-offs and Choices in the Movie App

#### 1. Using `useQuery` over `useEffect`

**Advantages**:

- Automatically handles state management (loading, error, caching, etc.).
- Simplifies data fetching logic with built-in support for retries and background refreshing.
- Better integration with server state and easy synchronization.

**Disadvantages**:

- Adds an extra dependency (`TanStack React Query`) to the project.
- Requires learning a new library if you're not already familiar with it.

#### 2. Using a lazy loading library over the `lazyload` attribute

**Advantages**:

- Allows for additional features like image blur and beautiful shapes while loading, enhancing the user experience.
- Provides more customization and flexibility.

**Disadvantages**:

- Increases the bundle size due to the additional library.

#### 3. Using search on Enter instead of on type

**Advantages**:

- Reduces the number of backend requests, which can improve performance and reduce server load.
- Provides a more controlled and deliberate search experience for the user.

**Disadvantages**:

- Delays immediate feedback to the user, which might affect the user experience.
- Users might expect real-time search results and could find the Enter requirement less intuitive.

#### 4. Using `vitest` instead of `jest` for testing

**Advantages**:

- Faster test execution and support for Hot Module Replacement (HMR).
- Seamless integration with Vite.
- Supports modern JavaScript and TypeScript with minimal configuration.
- Simpler setup and configuration. 

**Disadvantages**:

- Less mature as a testing framework compared to `jest`, which has a long history and extensive ecosystem.
- Smaller community and fewer resources.


## Possible future improvements

- Plan to add a TV Page and a Bookmark Page with search functionality.
- Plan to add a Home Page showcasing all movies and TV shows, including trending and recent titles.
- Plan to implement debounce on search and enable search functionality on type.
