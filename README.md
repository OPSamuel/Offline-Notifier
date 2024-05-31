<h1>THINGS YOU NEED TO CHANGE</h1>

<P> 
  <ul>
      <li>src/events/interactionCreate.js -> Line 15 Enter your user ID.</li>
      <li>src/events/offlinenotifier.js -> Line 7 & 9 Enter the Bot's ID (This is the bot that you want to track).</li>
      <li>src/events/offlinenotifier.js -> Line 16 Enter the channel ID where you want to be notified when the bot's status updates.</li>
      <li>src/events/offlinenotifier.js -> Line 17 Enter your user ID.</li>
      <li>src/functions/handleCommands.js -> Line 5 Enter in the ID of your offline notifier bot. (Need to create it first over in the discord developer portal, that can be found <a href="https://discord.com/developers/applications">here</a></li>
      <li>src/functions/handleCommands.js -> Line 6 The ID of the guild you are using this bot.</li>
      <li>.env -> Line 1 The Token of your offline notifier bot. This can be obtained through the discord developer portal.</li>
  </ul>
</P>
