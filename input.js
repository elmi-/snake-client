const { INPUT_KEYS } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (data) => {
    handleUserInput(data, connection);
  });

  return stdin;
};


const handleUserInput = (data, conn) => {
  switch (data) {
  case INPUT_KEYS.EXIT:
    process.exit();
    break;
  case INPUT_KEYS.MOVE_UP_KEY:
    conn.write("Move: up");
    break;
  case INPUT_KEYS.MOVE_LEFT_KEY:
    conn.write("Move: left");
    break;
  case INPUT_KEYS.MOVE_DOWN_KEY:
    conn.write("Move: down");
    break;
  case INPUT_KEYS.MOVE_RIGHT_KEY:
    conn.write("Move: right");
    break;
  case INPUT_KEYS.HISS:
    conn.write("Say: hsss...");
    break;
  default:
    console.log("invalid key passed");
  }
};

module.exports = { setupInput };