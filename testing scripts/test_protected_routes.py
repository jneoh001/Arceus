from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
import time
s = Service('testing scripts/geckodriver')
driver = webdriver.Firefox(service=s)

def test_recipe_protected():
    driver.get("http://localhost:5173/recipes/123456")
    time.sleep(5)
    assert(driver.current_url=="http://localhost:5173/login")

def test_add_reviews_protected():
    driver.get("http://localhost:5173/add-reviews/123456")
    time.sleep(5)
    assert(driver.current_url=="http://localhost:5173/login")

def test_view_reviews_protected():
    driver.get("http://localhost:5173/view-reviews/123456")
    time.sleep(5)
    assert(driver.current_url=="http://localhost:5173/login")

def test_search_protected():
    driver.get("http://localhost:5173/search")
    time.sleep(5)
    assert(driver.current_url=="http://localhost:5173/login")

def test_edit_profile_protected():
    driver.get("http://localhost:5173/editprofile")
    time.sleep(5)
    assert(driver.current_url=="http://localhost:5173/login")

def test_profile_protected():
    driver.get("http://localhost:5173/profile")
    time.sleep(5)
    assert(driver.current_url=="http://localhost:5173/login")

def test_goals_protected():
    driver.get("http://localhost:5173/goals")
    time.sleep(5)
    assert(driver.current_url=="http://localhost:5173/login")

def test_history_protected():
    driver.get("http://localhost:5173/history")
    time.sleep(5)
    assert(driver.current_url=="http://localhost:5173/login")

def test_landing_page_protected():
    driver.get("http://localhost:5173/")
    time.sleep(5)
    landing_page_text = driver.find_element(By.XPATH,'/html/body/div[1]/div/div/div[2]/h1').text
    assert(landing_page_text == "Top Rated")

#driver.quit()