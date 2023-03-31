from selenium import webdriver
from random import randint
import time
from selenium.webdriver.common.by import By

def runScript():
    #declare variables & obtain essential data
    link = input("Enter Form Link: \n")
    answersArray = []
    extraChoicesArray = []
    noAnswers = int(input("How many options you want to click (Counts  for Radio Buttons & Check Boxes) :) \n"))
    for i in range(noAnswers):
        answersArray.append(int(input("Radio Button Number: ")))
    extraChoices = input("Any Extra XPATH Choices? (e.g 1 to 5 rating e.t.c) Y/N ")
    if(extraChoices == 'Y'):
        extraChoicesNumber = int(input("How many extra choices? "))
        for i in range(extraChoicesNumber):
            extraChoicesXPATH = input("XPATH: ")
            extraChoicesArray.append(extraChoicesXPATH)
    submitXPath = input("Submit Button XPath: ")
    numberOfEntries = int(input("How many times do you want to run this script? "))
    for i in range(numberOfEntries):
        #start scripting --------------------------------------------------------------
        print("Running Script..." + str(i+1))
        driver = webdriver.Chrome()
        driver.get(link)

        # We get an array of all radio buttons.& checkboxes
        radiobuttons = driver.find_elements(By.CLASS_NAME, "docssharedWizToggleLabeledContainer")

        # CLick Radio Buttons
        for i in range(len(answersArray)):
            radiobuttons[answersArray[i]].click()
        #Click Extra Choices

        for i in range(len(extraChoicesArray)):
            (driver.find_element(By.XPATH, extraChoicesArray[i])).click()


        submitbutton = driver.find_element(By.XPATH, submitXPath)
        print(str(i+1) + "Script Completed.")
        submitbutton.click()
        
        




# Main
print("""
    -----------------------WELCOME TO GOOGLE FORM AUTO FILL ------------------------------ SCRIPT BY JAVIER NEOH 
    Things to prepare before using
    1. Google Form Link
    2. Number of the Radio buttons/Check Boxes you want to click. ( Start counting from 0)
    4. XPath for Special Buttons. ( e.g 1 to 5)
    3. Submit Button XPath
     """)

runScript()








# no_Qns = int(input("How many questions are there: \n"))

# choicesPerQn = []
# xpathArray = []

# submitXPath = input("Enter Submit Button Xpath: \n")
# for i in range(no_Qns):
#     print("For Question " + str(i+1))
#     qnXpath = input("Enter XPath of Desired Option ")
#     xpathArray.append(qnXpath)





# # Click all options
# for i in range(len(xpathArray)):
#     (driver.find_element(By.XPATH, xpathArray[i])).click()

# # Click Submit
# (driver.find_element(By.XPATH, submitXPath)).click()



# for number_of_runs in range(no_Qns):
#     #driver = webdriver.Chrome()

#     driver = webdriver.Chrome()
#     driver.get(link)

#     time.sleep(1)
#     #Question 1
#     # q1choice = randint(1,5)
#     # while( q1choice not in [1,2,5]):
#     #     q1choice = randint(1,5)

#     # if (q1choice == 1):
#     #     q1 = driver.find_element(By.XPATH,'//*[@id="i5"]/div[3]/div')
#     # if (q1choice == 2):
#     #     q1 = driver.find_element(By.XPATH,'//*[@id="i8"]/div[3]/div')
#     # if (q1choice == 5):
#     #     q1 = driver.find_element(By.XPATH,'//*[@id="i17"]/div[3]/div')
#     q1 = driver.find_element(By.XPATH,'//*[@id="i5"]/div[3]/div')
#     q1.click()


#     #question 2
#     q2choice = randint(1,5)
#     # while( q2choice not in [1,2,5]):
#     #     q2choice = randint(1,5)
