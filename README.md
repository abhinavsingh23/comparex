# Marketplace Comparison App (Assignment-Databricks)

Please use latest LTS version of node (18.17.1) and npm (9.6.7)
Framework used: ReactJS with Typescript

## Available Scripts

In the project directory, you can run:

### `npm install && npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Features Included

1. Comparison UI and filtering based on months. (By default current month is taken into consideration).
2. Hover Collapsible Side Navbar.
3. Chatbot UI element
4. Download Report button dowloads the comparison data JSON file.

### Responsive Design Points

1. As mentioned in assignment, the UI is for Desktop and Tablet audience (>650px).
2. The hover functionality is disabled for small screen sizes in interest of better User Experience. (This is done using a self-written custom Hook `useIsMobileScreen`)
3. Media Queries are used where applicable at appropriate breakpoints

### Code Design Points to Highlight

1. All the components are developed in a modular way, so all components are highly reusable.
2. All the CSS is self written, no third party library is used to write CSS, Styled-components is used to structure the CSS in .tsx files.
