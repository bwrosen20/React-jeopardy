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

2. They will be redirected to ".../theanswer" which will say 1 of two things
<img width="953" alt="image" src="https://user-images.githubusercontent.com/114421657/229658903-36da18a2-a8b7-44f6-afac-2c5635e5fc73.png">

   i. If they get the answer correct, it will look like this
   

   ii. If they get the answer incorrect, it will look like this
  <img width="953" alt="image" src="https://user-images.githubusercontent.com/114421657/229658985-f12ab13e-1a7d-43a0-b4b8-7328f1ec81f0.png">
 
  
  
i. Then the user will be directed to ".../steal" where the other team will have 10 seconds to answer the question
<img width="956" alt="image" src="https://user-images.githubusercontent.com/114421657/229658754-f47e0eb5-e11c-4546-ba87-427b2c2ee52f.png">

