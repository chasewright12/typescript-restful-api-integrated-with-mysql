import app from "./app";
import connectDB from "./config/database";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    connectDB;

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Falha ao iniciar o servidor:", error);
    process.exit(1);
  }
}

startServer();

process.on("unhandledRejection", (err) => {
  console.error("Rejeição não tratada:", err);
  process.exit(1);
});