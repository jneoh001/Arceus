from selenium import webdriver
import time
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

s = Service('testing scripts/geckodriver')
driver = webdriver.Firefox(service=s)

def test_registration_error_checking():
    driver.get("http://localhost:5173/register")
    email_input = driver.find_element(By.NAME,"email")
    email_input.clear()
    time.sleep(0.5)
    password_input = driver.find_element(By.NAME, "password")
    password_input.clear()
    time.sleep(0.5)
    first_name_input = driver.find_element(By.NAME, "firstName")
    first_name_input.clear()
    time.sleep(0.5)
    last_name_input = driver.find_element(By.NAME, "lastName")
    last_name_input.clear()
    time.sleep(0.5)
    activity_level = Select(driver.find_element(By.NAME,'activityLevel'))
    activity_level.select_by_index(1)
    activity_level.select_by_index(0)
    weight_input = driver.find_element(By.NAME, "weight")
    weight_input.clear()
    time.sleep(0.5)
    height_input = driver.find_element(By.NAME, "height")
    height_input.clear()
    time.sleep(0.5)
    carbohydrate_input = driver.find_element(By.NAME, "carbohydrateGoal")
    carbohydrate_input.clear()
    time.sleep(0.5)
    calorie_input = driver.find_element(By.NAME, "calorieGoal")
    calorie_input.clear()
    time.sleep(0.5)
    fat_input = driver.find_element(By.NAME, "fatGoal")
    fat_input.clear()
    time.sleep(0.5)
    protein_input = driver.find_element(By.NAME, "proteinGoal")
    protein_input.clear()
    required_fields = driver.find_elements(By.CLASS_NAME, 'text-red-500')
    assert(len(required_fields) == 11)

def test_registration_email_error():
    driver.get("http://localhost:5173/register")
    email_input = driver.find_element(By.NAME,"email")
    email_input.clear()
    time.sleep(0.5)
    email_input.send_keys("not an email")
    errors = driver.find_elements(By.CLASS_NAME, 'text-red-500')
    assert(len(errors) == 1 and errors[0].text == "*Invalid Email Address")

def test_weak_password_error():
    driver.get("http://localhost:5173/register")
    email_input = driver.find_element(By.NAME,"password")
    email_input.clear()
    time.sleep(0.5)
    email_input.send_keys("weakpassword")
    errors = driver.find_elements(By.CLASS_NAME, 'text-red-500')
    assert(len(errors) == 1 and errors[0].text == "*Include at least one Uppercase, Lowercase, Number and a Special Character")

def test_short_password_error():
    driver.get("http://localhost:5173/register")
    email_input = driver.find_element(By.NAME,"password")
    email_input.clear()
    time.sleep(0.5)
    email_input.send_keys("short")
    errors = driver.find_elements(By.CLASS_NAME, 'text-red-500')
    assert(len(errors) == 1 and errors[0].text == "*Password must be minimum 8 characters")
