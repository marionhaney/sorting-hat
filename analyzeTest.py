# Analyze Test: Personality Test Analytics 
# Marion Haney, Spring 2023 Harry Potter Booth Game
### miniconda env: conda activate booth23

# import packages
import numpy as np
import pandas as pd
import random

# import test question lookup table
TEST_LOOKUP = pd.read_excel("QA_Lookup_Table.xlsx", header = None)

# example data -- change to sqlite row
data = pd.read_excel("example_session_data.xlsx")

# dictionary of counts for analysis
RESULTS = {"GRY": 0, "HUF": 0, "RAV": 0, "SLY": 0}

# function for multinomial distribution draws
def multiDraw(pList, res):
    draw = np.random.multinomial(1, pList)
    x = np.where(draw == 1)[0][0]
    if (x == 0):
        res["GRY"] += 1
    elif (x == 1):
        res["HUF"] += 1
    elif (x == 2):
        res["RAV"] += 1
    else:
        res["SLY"] += 1

# go through the session and analyze the test
for i in range(0, 9):
    # i is the question number - 1 because of 0 indexing
    answer = data.iloc[0, i + 3] # +3 because of other cols
    pList = TEST_LOOKUP.iloc[i, answer - 1] # -1 because of 0 indexing
    pList = list(map(float, pList.split(","))) # convert to list of floats
    multiDraw(pList, RESULTS)


highest = max(RESULTS.values())
keys = [k for k in RESULTS if RESULTS[k] == highest]
# check for ties: if there is a tie, randomly choose
if (len(keys) > 1):
    choose = random.randint(0, len(keys) - 1)
    HOUSE = keys[choose]
else:
    HOUSE = keys[0]


# RESULTS is a dictionary of counts in each house
# HOUSE is the string of the house

# save result to data, result column
data.iloc[0, 2] = HOUSE
#print(RESULTS)
#print(HOUSE)

# save data to SQL

# save data to overall sessions


