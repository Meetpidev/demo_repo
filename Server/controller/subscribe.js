// controllers/subscription.js
import Subscription from "../moduls/subscribe.js";
// Subscribe to a channel
export const subscribeToChannel = async (req, res) => {
  const { videoChanel } = req.body;
  const userId = req.userId;

  try {
    const newSubscription = new Subscription({ videoChanel, userId });
    await newSubscription.save();
    res.status(201).json(newSubscription);
  } catch (error) {
    res.status(500).json({ error: 'Failed to subscribe to channel' });
  }
};

// Get subscriptions for a user
export const getSubscriptions = async (req, res) => {
  const { userId } = req.params;

  try {
    const subscriptions = await Subscription.find({ userId });
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subscriptions' });
  }
};
