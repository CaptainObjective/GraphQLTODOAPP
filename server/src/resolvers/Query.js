const Query = {
  users: async (parent, args, ctx, info) => {
    const user = await ctx.prisma.query.users(args, info);
    return user;
  },
  me: async (parent, args, ctx, info) => {
    if (!ctx.request.userId) {
      return null;
    }
    const user = await ctx.prisma.query.user(
      { where: { id: ctx.request.userId } },
      info
    );
    return user;
  },

  task: async (parent, args, ctx, info) => {
    const task = await ctx.prisma.query.task(args, info);
    return task;
  },
  tasks: async (parent, args, ctx, info) => {
    const tasks = await ctx.prisma.query.tasks(args, info);
    return tasks;
  }
};

module.exports = Query;
