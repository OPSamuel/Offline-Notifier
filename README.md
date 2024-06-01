 <h1>READ ME FIRST</h1>

<h3>If you encounter any issues with this bot or any of my other creations, please feel free to send me a direct message on Discord:</h3>

<ul>
   <li>Username: opsamuelcc</li>
   <li>ID: 574217755692236803</li>
</ul>

<p>Below is a rundown of features and adjustments necessary for optimal bot performance. Make sure you've visited the Discord Developer Portal (accessible by clicking <a href="https://discord.com/developers/applications">here</a>) to create an application and invite it to a mutual server alongside your bot that you would like to track.</p>

<h3>Remember: ⚠️ Do not share your bot token with anyone, not even your friends. ⚠️</h3>

<h3>Here's what needs to be changed for your bot to function properly:</h3>h3>
<ul>
   <li>`src/events/interactionCreate.js` -> Line 15: Enter your user ID.</li>
   <li>src/events/offlinenotifier.js -> Lines 7 & 9: Input the Bot's ID (the one you want to track).</li>
   <li>src/events/offlinenotifier.js -> Line 16: Specify the channel ID where you wish to receive notifications about the bot's status updates.</li>
   <li>src/events/offlinenotifier.js -> Line 17: Enter your user ID.</li>
   <li>src/functions/handleCommands.js -> Line 5: Enter the ID of your offline notifier bot (make sure to create it first on the Discord Developer Portal).</li>
   <li>src/functions/handleCommands.js -> Line 6: Provide the ID of the guild where you'll be using this bot.</li>
   <li>.env -> Line 1: Input the Token of your offline notifier bot (obtained from the Discord Developer Portal)."</li>
</ul>


