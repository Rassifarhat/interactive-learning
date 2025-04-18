interface Props {
    onShowAnswer: () => void;
    onTryAnswer: () => void;
  }
  
  export const AnsweringChoices: React.FC<Props> = ({ onShowAnswer, onTryAnswer }) => (
    <div className="space-y-2">
      <button
        className="w-full px-4 py-2 rounded bg-purple-600 hover:bg-purple-700"
        onClick={onTryAnswer}
      >
        🎤 Let me try to answer
      </button>
  
      <button
        className="w-full px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
        onClick={onShowAnswer}
      >
        📖 Just give me the answer
      </button>
    </div>
  );