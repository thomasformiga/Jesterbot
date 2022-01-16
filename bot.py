import os
import discord
from discord.ext import commands

#Bot parameters
bot = commands.Bot(
    activity=discord.Game(name='/jester, /help'),
    command_prefix=commands.when_mentioned_or("j! "),
)
#guild list (not working yet)
guild_ids = []
for guild in bot.guilds:
    guild_ids.append(guild.id)

#Connection confirmation
@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')



#Commands
@bot.slash_command(guild_ids=[928401895595327548], name="jester", description="Say hi to Jester!")
async def jester(ctx):
    await ctx.respond(f"Hello {ctx.author.mention}, I am ***jester.***\nI have endless games, charades, prizes and rewards...\n\nJust type `/game` and we can begin...")


#load extensions here ('extensions.NAME')
bot.load_extension('extensions.help')

#All done, run token
bot.run(os.environ['TOKEN'])