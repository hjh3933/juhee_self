<!-- socket.io 이해하기 -->

| 코드                    | 대상                |
| ----------------------- | ------------------- |
| `socket.emit`           | 나 혼자             |
| `io.emit`               | 전원                |
| `socket.broadcast.emit` | 나 빼고 전원        |
| `io.to(room).emit`      | room 전원           |
| `socket.to(room).emit`  | room 전원 (나 제외) |
