# React-jeopardy

Welcome to Brian's React Jeopardy app!
The game can be played between two teams. Rules are listed on the app's home page.

Pages:

The app contains 3 pages:

1. The home page contains a list of rules for the game and use of the app
<img width="959" alt="image" src="https://user-images.githubusercontent.com/114421657/229657717-a72f5b3a-0235-4c48-985d-91b0c9f5f94d.png">

2. The "Play Jeopardy!" page contains the game board and a scoreboard which will update as teams score points.
<img width="955" alt="image" src="https://user-images.githubusercontent.com/114421657/229657813-ef7e6216-eb97-4b2f-8fbc-f017f51dbe5e.png">

3. And the "Add a New Question!" page contains a form where you can upload a question to the JSON database
<img width="957" alt="image" src="https://user-images.githubusercontent.com/114421657/229657957-5a57051a-53fd-418d-81fe-f05537c0a8b1.png">


Functionality:

Most of the app's functionality works through the "Play Jeopardy" page. 

When "Play Jeopardy" is clicked, it will redirect the user to ".../board".
The only function you can use from this page to click a category value. The following components will follow:

1. First, the user will be led to ".../question" where they will have 15 seconds to input their answer.
<img width="960" alt="image" src="https://user-images.githubusercontent.com/114421657/229658572-99d81a0e-cfc0-4a7f-b916-7e8b1291d0f6.png">

2. After submitting their answer, they will be redirected to ".../theanswer" which will say 1 of two things


   2a. If they get the answer correct, it will look like this
   <img width="960" alt="image" src="https://user-images.githubusercontent.com/114421657/229659579-fa3ff2b9-c404-4b4c-bce6-61318e4e8550.png">


   2b. If they get the answer incorrect, it will look like this
  <img width="953" alt="image" src="https://user-images.githubusercontent.com/114421657/229658985-f12ab13e-1a7d-43a0-b4b8-7328f1ec81f0.png">
 
  
  
3. Then the user will be directed to ".../steal" where the other team will have 10 seconds to answer the question
<img width="956" alt="image" src="https://user-images.githubusercontent.com/114421657/229658754-f47e0eb5-e11c-4546-ba87-427b2c2ee52f.png">

   3a. They will either get the answer right and see the "correct!!" screen pictured above or be alerted to the correct answer (see below)
   <img width="960" alt="image" src="https://user-images.githubusercontent.com/114421657/229659852-055d1b06-8c59-42e6-86fa-e9be5c52b775.png">

4. We will assume that team 1 got that question correct. We will return to the board component with two differences. The scoreboard will be updated and the selected question will be greyed out and unclickable (see below)
<img width="956" alt="image" src="https://user-images.githubusercontent.com/114421657/229660756-7df59443-b9b0-4ab5-af99-844cd0a71b1f.png">

5. After a few turns of gameplay, the board will start greying out and the scoreboard will continue to update
<img width="959" alt="image" src="https://user-images.githubusercontent.com/114421657/229661142-940274da-03e9-4602-bc92-1e6a29de69d1.png">

6. After all 25 questions are answered, the game will end and the users will be alerted as to who won and what the score was. They will also be given the option to reset the board and play again. The game selects questions from an array of about 5 questions per category/value. The API currently consists of about 125 questions.
<img width="960" alt="image" src="https://user-images.githubusercontent.com/114421657/229661625-f9f56bf0-fbb6-481e-9e22-57835296a4da.png">


