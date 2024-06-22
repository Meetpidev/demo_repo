import User from '../moduls/auth.js';

export const gpoints = async (req, res) => {
  try {
    const { id } = req.body; 
    
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send('User not found');
    }

    user.points += 5;
    await user.save();
    res.json({ points: user.points });
  } catch (error) {
    console.error('Error updating points:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};