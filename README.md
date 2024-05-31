 <h1>THINGS YOU NEED TO CHANGE</h1>

<p>Any issues with this bot or any of my other bots please DM me on discord:</p>

<p>
  <ul>
      <li>Username: opsamuelcc</li>
      <li>ID: 574217755692236803</li>
  </ul>
 </p>
<p>Below is a list of features with the bot that you must change. Please ensure that you have gone over to the discord developer portal which can be found by clicking <a href="https://discord.com/developers/applications">here</a>. Ensuring that you have created an application and that you have invited it to a mutal server with your bot that you would like to track. ⚠️Don't share your bot token with anyone. Not even your friends.⚠️</p>
<p> 
  <h3>Below is a list of things that you must change if you want your bot to work properly:</h3>
  <ul>
      <li>src/events/interactionCreate.js -> Line 15: Enter your user ID.</li>
      <li>src/events/offlinenotifier.js -> Line 7 & 9: Enter the Bot's ID (This is the bot that you want to track).</li>
      <li>src/events/offlinenotifier.js -> Line 16: Enter the channel ID where you want to be notified when the bot's status updates.</li>
      <li>src/events/offlinenotifier.js -> Line 17: Enter your user ID.</li>
      <li>src/functions/handleCommands.js -> Line 5: Enter in the ID of your offline notifier bot. (Need to create it first over in the discord developer portal, that can be found <a href="https://discord.com/developers/applications">here</a>.</li>
      <li>src/functions/handleCommands.js -> Line 6: The ID of the guild you are using this bot.</li>
      <li>.env -> Line 1: The Token of your offline notifier bot. This can be obtained through the discord developer portal.</li>
  </ul>
</p>
