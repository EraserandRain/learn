# Django Demo

## Requirements

- Python 3.8 or higher
- Rye for dependency management

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://your-repo-url.git
   cd django-demo
   ```

2. **Install Rye:**
   Follow the instructions on the [Rye installation page](https://rye-up.com/guide/installation/) to install Rye.

3. **Set up the project:**
   ```bash
   rye sync
   ```

##  Django Project and App

1. **Django project:**
   The current Django project name is `core`.

2. **Create a new Django app:**
   To create a new app within your Django project, run:
   ```bash
   rye run python manage.py startapp myapp
   ```
   Replace `myapp` with your desired app name.

## Usage

1. **Run migrations:**
   Before starting the server, make sure to apply migrations:
   ```bash
   rye run python manage.py migrate
   ```

2. **Start the development server:**
   You can start the Django development server with:
   ```bash
   rye run python manage.py runserver
   ```

3. **Create a superuser (optional):**
   If you want to access the Django admin interface, create a superuser:
   ```bash
   rye run python manage.py createsuperuser
   ```

4. **Access the application:**
   Open your web browser and go to `http://127.0.0.1:8000/` to see your Django application in action.
