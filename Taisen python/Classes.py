import csv
inf = 0
password = 266
choice = int(input(" 1. Show scores. \n 2. Admin Sign in \n Input: "))
if choice == 1:
  file = open("classes.csv", "r")
  for row in file:
    print(row)
  file.close()
elif choice == 2:
  guess = int(input("Enter the admin password: "))
  if guess == password:
    while inf == 0:
      apple = int(input(" 1. Edit score \n 2. Add new class \n 3. Show current scores \n 4. Quit \n Input: "))
      if apple == 1:
        file = open("classes.csv","r")
        x = int(input("enter a class year to edit. "))
        x = str(x)
        gameScore = int(input("1. Football: 5 \n 2. Soccer: 6 \n 3. Play: 3 \n input: "))
        if gameScore == 1:
          game = 5
        elif gameScore == 2:
          game = 6
        elif gameScore == 3:
          game = 3
        copy = ""
        for row in file:
          if x in row: 
            score = row[5:len(row)]
            score = int(score)
            new = int(input("how many people came from " + x + ": "))
            new = new * game
            newScore = score + new
            NewClass = x + ", " + str(newScore) + "\n"
            copy = copy + NewClass
          else:
            copy = copy + row
        file.close()
        file = open("classes.csv", "w")
        file.write(copy)
        file = open("classes.csv", "r")
        print("The new scores are:")
        for row in file:
          print(row)
        file.close()
      elif apple == 2:
        file = open("classes.csv", "a")
        cow = input("Enter the year of the class you want to add: ")
        ford = cow + ", 0"
        file.write(ford)
        file.close()
      elif apple == 3:
        file = open ("classes.csv", "r")
        for row in file:
          print(row)
        file.close()
      elif apple == 4:
        inf = 1
  else: 
    print("wrong password.")