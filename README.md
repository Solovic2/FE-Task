# Telda Task

> This App is an app for displaying movies, search on movie and watch its trailer.

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

## Reasoning behind your technical decisions

- Created a shared component for search across pages to improve user experience.
- Utilized Search Params for the search query and page number, making it easier for users to return to the same page with the search results when reloading the page.
- Implemented the search function to trigger on Enter key press, reducing backend requests, and ensured that deleting the search input returns the user to the Movie Page.
- Developed a shared Navbar across application pages for future enhancements.
- Employed TanStack React Query to efficiently manage the state of data (loading, error, fetching, etc.).
- Integrated the Movie Trailer Library to fetch and display YouTube trailers for movies.
- Designed a Modal that pops up when the user clicks the play button on the Details Page, allowing them to watch the trailer and enhancing the user experience.
- Added lazy loading to images to enhance user experience and app performance.
