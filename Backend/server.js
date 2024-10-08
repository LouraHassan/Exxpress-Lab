import express from "express";
const app = express();
app.use(express.json())
const port = 3500

let userInfo = []

app.get('/userInfo', (req, res) => {
    res.json(userInfo)
})
// post
app.post("/userInfo", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const username = { name, email, password }
    userInfo.push(username)
res.json(username)
    
})

app.patch("/userInfo/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    const { name, email, password } = req.body
    const user = userInfo[userId]
    user.name = name
    user.email = email
    user.password = password
    res.json(user)
})

app.delete("/userInfo/:id", (req, res) => {
    const userId = parseInt(req.params.id)
 
        const deletedUser = userInfo.splice(userId, 1);
        res.json({ message: "User deleted", deletedUser });

    
    res.send(`Got a DELETE request at /${userId}`)
  })
app.listen(port), () => {
    console.log(`Server running on port ${port}`);
}