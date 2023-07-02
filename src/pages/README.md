# The `pages` folder

The "pages" folder is used to organize files representing different pages or views of the web application. It plays a vital role in managing routes and providing structure to the application's user interface. Each file in the "pages" folder corresponds to a specific page and contains the necessary code or markup for that page. Proper organization of files in this folder enhances code readability and simplifies navigation within the application.

To navigate between each page, we use the routes from the `routes.js` file.

All pages have the layout (navbar & footer) thanks to the `_app.js` file.

### i18n.js

# Description:

The `i18n.js` file initializes the i18next library for internationalization. It configures the fallback language, resources, and translations for the supported languages (English and French).

# Dependencies:

- `i18next` library
- `initReactI18next` from the `react-i18next` library

# Usage:

The `i18n.js` file exports an instance of the initialized i18next library with the following configuration:

- `fallbackLng`: The fallback language in case the requested language is not available.
- `resources`: An object containing the translations for each supported language. The translations are organized by namespaces (in this case, only the `translation` namespace is used).
- Translations: The translations are provided for different components, pages, and labels used in the application in both English and French.
