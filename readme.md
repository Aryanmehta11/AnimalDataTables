## Design Approach:
While designing the app, the goal was to minimize redundancy and leverage Object-Oriented Programming (OOP) principles, as well as DOM manipulation to maintain a flexible table structure. The focus was on keeping the UI simple and using HTML, CSS, and JavaScript to build an easy-to-use interface.

By applying OOP, the main objective was to create a general class that could be easily customized for different tables. Since this project involves three tables with distinct requirements, I passed different parameters to the class to make it dynamic and adaptable.

For example, the AnimalTable class was created as a generalized structure, and then three specific instances were created for different animal categories—Dogs, Fish, and Cats.

To render data dynamically, I stored the data in separate JSON files and used asynchronous programming to fetch and render the data in the tables. This asynchronous approach ensures smooth and non-blocking data loading, improving user experience.

## Future Enhancements:
# Data Communication: Implement functionality to store data for newly added animals in a JSON file.
# Database Integration: Switch from using JSON files to a database for better scalability and data persistence.
# Progressive Web App (PWA): Convert the app into a PWA for offline support and better performance on mobile devices.
# LocalStorage: Utilize localStorage to persist data locally, so that the data is maintained even after the user refreshes the page. Currently, refreshing resets the data to the original JSON data.
