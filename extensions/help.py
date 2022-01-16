import discord
from discord.commands import slash_command, CommandPermission, SlashCommandGroup
from discord.ext import commands


class help(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    help = SlashCommandGroup("help", "Commands list, links, etc.")

    help_commandlist = help.create_subgroup(
        "commandlist", "List of commands"
    )

    secrethelp = SlashCommandGroup(
        "secrethelp",
        "secret help",
        permissions=[
            CommandPermission(
                "owner", 2, True
            )  # Ensures the owner_id user can access this, and no one else
        ],
    )

    @help.command()
    async def help(self, ctx):
        await ctx.respond("lorem ipsum dolor sit amet")

    @help_commandlist.command()
    async def commandlist(self, ctx):
        await ctx.respond("command 1 command 2 command 3")

    @secrethelp.command()
    async def secret_help(self, ctx, member: discord.Member):
        await ctx.respond("calmo games momento")

def setup(bot):
    bot.add_cog(help(bot))