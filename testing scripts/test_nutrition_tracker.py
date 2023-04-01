from selenium import webdriver
import time
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

s = Service('testing scripts/geckodriver')
driver = webdriver.Firefox(service=s)

def test_nutrition_tracker():
    driver.get("http://localhost:5173/login")
    time.sleep(1)
    user_email = driver.find_element(By.ID,'formBasicEmail')
    user_email.send_keys("chaitanyatest@arceus.com")
    user_password = driver.find_element(By.ID,'formBasicPassword')
    user_password.send_keys('TestPassword!2')
    login_button = driver.find_element(By.XPATH,"/html/body/div/div/div/div[2]/div[2]/form/div[3]/button")
    login_button.click()
    time.sleep(2)
    profile_link = driver.find_element(By.XPATH, "/html/body/div/div/div/div[1]/header/nav/a[3]")
    profile_link.click()
    #Find the original size of the Daily Goal Bars
    carbohydrate_bar = driver.find_element(By.XPATH,"/html/body/div/div/div/div[2]/div[1]/div/div[1]/div[2]/div")
    carbohydrate_bar_before = int(carbohydrate_bar.get_attribute('style').split('width: ')[1].split(';')[0].replace('%', ''))
    protein_bar = driver.find_element(By.XPATH,"/html/body/div/div/div/div[2]/div[1]/div/div[2]/div[2]/div")
    protein_bar_before = int(protein_bar.get_attribute('style').split('width: ')[1].split(';')[0].replace('%', ''))
    fats_bar = driver.find_element(By.XPATH,"/html/body/div/div/div/div[2]/div[1]/div/div[3]/div[2]/div")
    fats_bar_before = int(fats_bar.get_attribute('style').split('width: ')[1].split(';')[0].replace('%', ''))
    calories_bar = driver.find_element(By.XPATH,"/html/body/div/div/div/div[2]/div[1]/div/div[4]/div[2]/div")
    calories_bar_before = int(calories_bar.get_attribute('style').split('width: ')[1].split(';')[0].replace('%', ''))
    print(carbohydrate_bar_before,protein_bar_before,fats_bar_before,calories_bar_before)
    # Navigate to a Recipe and Select "Add to Tracker"
    home_link = driver.find_element(By.XPATH,"/html/body/div[1]/div/div/div[1]/header/nav/a[1]")
    home_link.click()
    time.sleep(15)
    recipe_card = driver.find_element(By.XPATH,'//*[@id="recipeCardEffects"]')
    recipe_card.click()
    time.sleep(5)

    # protein_bar = driver.find_element(By.XPATH,"/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[2]/div")
    # protein_bar_before = protein_bar.size['width']
    # print(calories_bar_before,carbohydrate_bar_before,protein_bar_before,fats_bar_before)
      



test_nutrition_tracker()