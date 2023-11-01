import Board from "@/components/board";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1>Tic-Tac-Toe</h1>
      <div>
        <Board />
      </div>
    </div>
  );
};

export default Home;