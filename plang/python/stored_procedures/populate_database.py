from sqlalchemy import create_engine, Column, Integer, String, Date, inspect
from sqlalchemy.orm import declarative_base,sessionmaker
from faker import Faker

# Import configuration
import toml
config = toml.load('config.toml')
db_config = config['database']
DATABASE_URL = f"postgresql+psycopg2://{db_config['user']}:{db_config['password']}@{db_config['host']}:{db_config['port']}/{db_config['dbname']}"

# Create a database connection engine
engine = create_engine(DATABASE_URL)

# Create a base class
Base = declarative_base()

# Define table structure
class Employee(Base):
    __tablename__ = 'employees'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    hire_date = Column(Date, nullable=False)

# Check if the table exists and create it if not
inspector = inspect(engine)
if not inspector.has_table(Employee.__tablename__):
    Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Use Faker to generate random data
fake = Faker()

# Insert 10 rows of random data
for _ in range(10):
    employee = Employee(
        first_name=fake.first_name(),
        last_name=fake.last_name(),
        hire_date=fake.date_this_decade()
    )
    session.add(employee)

# Commit the transaction
session.commit()

# Close the session
session.close()

print("10 random employees have been added to the 'employees' table.")

