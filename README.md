# Getting Started

- Please read [INSTRUCTIONS.md](https://github.com/reside-eng/take-home-assignment-nextjs-simplyrets/blob/main/INSTRUCTIONS.md)
- For any questions about Next.js, please visit [https://nextjs.org/docs](https://nextjs.org/docs)

# Code and Design Decisions
I will list out the acceptance criteria and explain decisions behind each and whether I was able to accomplish in the 3 hour time period

- Create the following page: Property Listings ✅
    **Property Listings created. I created a components folder to hold different child components that may be needed or used. The HouseListing Component simply iterates through the properties and sends a specific property to the House component to be rendered. The House Component is then used to display a single tile for a house. It does have some logic for the toggling of the heart/liking functionality and saving the data into localStorage. From there you could have a HouseDetail page that is then used to display a specific house detail page with more information on the property and updates your route to reflect that. I would imagine that the House Detail Page then would have mutliple components making up that page. In that case, I would have a folder within components for the House Detail components.**
- Implement the following design:
  - A global sticky header containing the page name
    **Done** ✅
  - A panel on the left that displays a map
    **Done** ✅
  - A panel on the right that displays a list of the property listings available within the map area
    **Done** ✅
    - Output the data from the SimplyRETS API into the list view of properties. Each
      property should at least display the following information:
      - `bedrooms`
      - `bathsFull` + `bathsHalf` (ex: 1 full + 3 half = 2.5)
      - `area` (as Sq Ft)
      - `listPrice`
      - `address`
      - `listDate` (MM/DD/YY) 🟡 **List date is MM/DD/YYYY**
      - `photo[0]`
      - Favorite state: White outlined heart if not favorited, red heart if
        favorited. _(Heart SVG assets included.)_
    - If the map area changes (zoom, move, etc), the list of property listings should update **Not Done 🟡: Given the time constraint I did not update the list of properties based on map interactions**
  - Use style definitions from Figma when possible **Done** ✅
  - Desktop and Mobile screen sizes are provided. All screen widths from 375 to
    1680 should be supported. Intermediate responsive behavior should be
    inferred. **Mostly Done 🟡: I did not get the property listing and map to toggle full screen on mobile given the time constraints. I did however have the house tile shrink according to the screen size and go to one column view in mobile viewport.**
- Get data from the SimplyRETS property endpoint on Property Listings page load **Done** ✅
  - cache in local storage **Done** ✅
- On the Property Listings page, the user can click the heart to save the mlsId
  associated. Store the saved/favorited properties in the browser local storage. **Done** ✅
- Add any tests to satisfy confidence in your application. **🟡 I was not able to create tests given the 3 hour time box, I tried to stick to that 3 hours and get as much functionality done as possible**
- Styles can be handled in any manner you choose – **I went with Global css and some inline styles, if I had more time to structure the project, I would use something more consistent like SASS or all inline**
- This application is expected to be built utilizing current patterns and best
  practices of React (i.e. hooks). _Please do not use any other 3rd-party state
  management libraries such as Redux or Mobx._ `react-query` is okay. **Done** ✅
- Explain any design decisions **Described above**

Thank you for the fun challenge! I tried my best to stick within the parameters for 3 hours which limited me to getting all of the features done on time, but I wanted it to be realistic and not just spend 4+ getting all of them finished.