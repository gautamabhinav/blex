// Get or create a single demo post
const getPost = async () => {
  let post = await Post.findOne();
  if (!post) {
    post = await Post.create({ title: "Realtime Demo Post" });
  }
  return post;
};

// Socket.IO connection
io.on("connection", async (socket) => {
  console.log("Client connected:", socket.id);

  const post = await getPost();
  socket.emit("updateStats", post);

  // Like
  socket.on("likePost", async () => {
    const post = await getPost();
    post.likes += 1;
    await post.save();
    io.emit("updateStats", post);
  });

  // View
  socket.on("viewPost", async () => {
    const post = await getPost();
    post.views += 1;
    await post.save();
    io.emit("updateStats", post);
  });

  // Comment
  socket.on("addComment", async (comment) => {
    const post = await getPost();
    post.comments.push(comment);
    await post.save();
    io.emit("updateStats", post);
  });
});

// REST API (optional if you need HTTP access too)
app.get("/api/post", async (req, res) => {
  const post = await getPost();
  res.json(post);
});
