
const greetHello = (req, res) => {
    res.json({ message: "hello" });
};

module.exports = { greetHello };