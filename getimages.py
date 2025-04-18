from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
import time

# Step 1: Setup browser
options = webdriver.ChromeOptions()
options.add_argument('--start-maximized')

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Step 2: Visit the page
driver.get("https://dream-machine.lumalabs.ai/board/new")

# Step 3: Wait for the page to load (adjust sleep or use WebDriverWait)
time.sleep(10)

# Step 4: Find the textarea or input box for prompt
try:
    prompt_box = driver.find_element(By.TAG_NAME, "textarea")
    prompt_box.send_keys("a futuristic robot dancing in Times Square")

    # Step 5: Press ENTER or find a generate button and click it
    prompt_box.send_keys(Keys.RETURN)  # or locate and click the generate button

    # Step 6: Wait for the output to load
    time.sleep(30)  # adjust depending on video generation time

    # Step 7: Screenshot as fallback
    driver.save_screenshot("output.png")
    print("Screenshot saved.")

except Exception as e:
    print("Error occurred:", e)

# Optionally keep browser open
# input("Press Enter to close browser...")

driver.quit()
