const Subscription = {
  taskCreated: {
    subscribe: (parent, args, ctx) => {
      return ctx.pubsub.asyncIterator("TASK_CREATED");
    }
  },
  taskDeleted: {
    subscribe: (parent, args, ctx) => {
      return ctx.pubsub.asyncIterator("TASK_DELETED");
    }
  }
};

module.exports = Subscription;
