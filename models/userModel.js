// Ruta para crear un nuevo usuario
router.post('/user', async (req, res) => {
    try {
      const { discordUserName, password, status } = req.body;
      const newUserDTO = new UserDTO(discordUserName, password, status);
      const newUser = new User(newUserDTO);
      const result = await newUser.save();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta para obtener todos los usuarios
  router.get('/user', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  