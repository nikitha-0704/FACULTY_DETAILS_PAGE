# FACULTY_DETAILS_PAGE

## Introduction

The Faculty Details Application is designed to streamline the management of faculty information within an educational institution. The system integrates a frontend built with React and a backend using Spring Boot, supported by a MySQL database. The application provides a user-friendly interface for faculty members to enter, update, and view their professional and personal details.

## Objectives

- Develop a comprehensive system for managing faculty information.
- Ensure data integrity and security through structured data management.
- Provide an easy-to-use interface for faculty members to manage their details.
- Implement authentication to secure access to the application.

## Technologies Used

- **Frontend**: React
  - Libraries: Axios for API calls, React Router for navigation, Material-UI for UI components.
- **Backend**: Spring Boot
  - Libraries: Spring Data JPA for database interaction, Spring Security for authentication.
- **Database**: MySQL
  - Tools: MySQL Workbench for database management.


## Setup Instructions

### Backend (Spring Boot)

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/faculty_details_page.git
    cd faculty_details_page
    ```

2. **Set up the MySQL database:**
    - Create a database named `faculty_db`.
    - Update the database configurations in `src/main/resources/application.properties` file:
      ```properties
      spring.datasource.url=jdbc:mysql://localhost:3306/faculty_db
      spring.datasource.username=root
      spring.datasource.password=yourpassword
      spring.jpa.hibernate.ddl-auto=update
      ```

3. **Run the Spring Boot application:**
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

### Frontend (React)

1. **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Run the React application:**
    ```bash
    npm start
    ```

## Usage

1. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000` for the frontend.
   - The backend API can be accessed at `http://localhost:8080`.

2. **Login:**
   - Use the Google OAuth2 login to access the dashboard.

3. **Manage Faculty Details:**
   - Fill in the faculty details form with collapsible sections.
   - Save the details, which will be stored in the MySQL database.
   - View and edit the saved details.

## Authentication

The application uses Google OAuth2 for user authentication. Make sure to set up a Google OAuth2 Client ID and Secret, and configure the `application.properties` file with these details.

## Contributing

1. **Fork the repository.**
2. **Create a new branch:**
    ```bash
    git checkout -b feature-name
    ```
3. **Make your changes and commit them:**
    ```bash
    git commit -m 'Add some feature'
    ```
4. **Push to the branch:**
    ```bash
    git push origin feature-name
    ```
5. **Submit a pull request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
