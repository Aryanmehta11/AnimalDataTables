

# **Dynamic Animal Management Tables**

## **Introduction**
The Dynamic Animal Management Tables project is a web-based application designed to create, display, and manage tables of animal data dynamically. The application provides users with the ability to add, edit, delete, and sort animal information effortlessly. Built using JavaScript, the system offers a flexible and interactive platform for organizing and visualizing data across multiple categories like "Big Cats," "Dogs," and "Big Fish."

By leveraging modular design principles, the project supports a wide range of customization, such as configurable table headers, user interactions, and responsive functionality. The result is an efficient and user-friendly interface for managing datasets.

---

## **Design Approach**
This application is built using an **Object-Oriented Programming (OOP)** approach for modularity and reusability. Each table is represented as an independent instance of the `AnimalTable` class, which encapsulates all the logic required for data manipulation and rendering.

1. **Dynamic Rendering**: 
   - Tables are generated dynamically based on data from JSON files.
   - The structure of the table adjusts automatically to accommodate headers and rows.

2. **User Interactions**: 
   - Interactive prompts allow users to add, edit, or delete data entries.
   - Sorting functionality is implemented for select fields with ascending and descending options.

3. **Customizable Features**:
   - Styling options like bold, italic, and color are applied to animal names.
   - Default images are used for entries lacking image URLs, ensuring visual consistency.

4. **Asynchronous Data Handling**:
   - Data is fetched asynchronously from JSON files to enhance performance and reduce latency.

5. **Scalability**:
   - The design allows easy addition of new tables, fields, or functionalities without major restructuring.

---

## **Features**
1. **Interactive Tables**:
   - Displays animal data in neatly formatted tables.
   - Automatically renders headers and rows based on the provided JSON data.

2. **Sorting Functionality**:
   - Users can sort data on select fields (e.g., name, size, location).
   - Sorting includes visual indicators (ascending/descending arrows) for clarity.

3. **Data Management**:
   - **Add Animal**: Users can add new entries by providing details through prompts.
   - **Edit Animal**: Allows modification of existing entries.
   - **Delete Animal**: Enables removal of unwanted data entries.

4. **Custom Styling**:
   - Animal names can be styled with options like bold, italic, and blue color.

5. **Default Images**:
   - Entries without images use a predefined default image for visual consistency.

6. **Configurable Tables**:
   - Each table is initialized with unique attributes like a specific JSON file, table name, sortable fields, and default image URL.

---
## **Code References**

1. **Stackoverflow Chats and Discussions (For JS)**:
   

2. **W3Schools For HTML and CSS**:
   - Add filters for specific criteria, such as size range or location-based search.






## **Potential Enhancements**
1. **Database Integration**:
   - Replace JSON files with a database for persistent and large-scale data storage.

2. **Advanced Filtering**:
   - Add filters for specific criteria, such as size range or location-based search.

3. **Pagination**:
   - Implement pagination to handle large datasets efficiently.

4. **Responsive Design**:
   - Optimize the interface for different screen sizes, including mobile devices.

5. **Bulk Operations**:
   - Allow users to perform bulk actions, such as deleting multiple entries at once.

6. **Image Upload**:
   - Enable users to upload custom images for new entries instead of providing a URL.

7. **Enhanced UI**:
   - Transition from basic prompts to modal dialogs for a more polished user experience.

8. **Integration with APIs**:
   - Fetch live animal data from public APIs to keep the information updated dynamically.


