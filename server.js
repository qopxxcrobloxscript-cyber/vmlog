const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000

// メモリログ保存
global.vmLogs = []

app.use(express.json())
app.use(express.static("public"))

// テスト用ログ追加API
app.post("/add-log", (req, res) => {
    const log = req.body
    global.vmLogs.push(log)
    console.log("Log added:", log)
    res.json({ success: true })
})

// ログ取得API
app.get("/vmhook-logs", (req, res) => {
    res.json(global.vmLogs)
})

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})
