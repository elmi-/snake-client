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
  case "\u0003":
    process.exit();
    break;
  case "w":
    conn.write("Move: up");
    break;
  case "a":
    conn.write("Move: left");
    break;
  case "s":
    conn.write("Move: down");
    break;
  case "d":
    conn.write("Move: right");
    break;
  default:
    console.log("invalid key passed");
  }
};

module.exports = { setupInput };