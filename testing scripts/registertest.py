from selenium import webdriver

driver = webdriver.Firefox(executable_path='testing scripts/geckodriver')
driver.get("http://localhost:5173/register")

email_input = driver.find_element_by_name("email")
email_input.clear()
email_input.send_keys("notemail")

password_input = driver.find_element_by_name("password")
password_input.clear()
password_input.send_keys("weak")


