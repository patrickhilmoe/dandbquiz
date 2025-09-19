import React, { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import rightbed1 from './img/right-bed1.jpg';
import wrongbed1 from './img/wrong-bed1.jpeg';
import wrongbed2 from './img/wrong-bed2.jpeg';
import wrongbed3 from './img/wrong-bed3.jpg';
import rightbosch1 from './img/right-bosch-refer1.jpg';
import wrongbosch1 from './img/wrong-bosch-refer1.jpg';
import wrongbosch2 from './img/wrong-bosch-refer2.jpg';
import wrongbosch3 from './img/wrong-bosch-refer3.jpg';
import rightlg1 from './img/right-lg1.jpg';
import wronglg1 from './img/wrong-lg1.jpg';
import wronglg2 from './img/wrong-lg2.jpg';
import wronglg3 from './img/wrong-lg3.jpg';
import rightmw1 from './img/right-micro1.jpg';
import wrongmw1 from './img/wrong-micro1.jpg';
import wrongmw2 from './img/wrong-micro2.jpg';
import wrongmw3 from './img/wrong-micro3.jpg';
import rightfp1 from './img/right-fp1.jpg';
import wrongfp1 from './img/wrong-fp1.jpg';
import wrongfp2 from './img/wrong-fp2.jpg';
import wrongfp3 from './img/wrong-fp3.jpg';
import rightmiele1 from './img/right-mieledw1.jpg';
import wrongmiele1 from './img/wrong-mieledw1.jpg';
import wrongmiele2 from './img/wrong-mieledw2.jpg';
import wrongmiele3 from './img/wrong-mieledw3.jpg';


interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    image: string;
  }>;
  correctAnswer: number;
  explanation?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Which is the correct bed model tag?",
    options: [
      { text: "1", image: wrongbed1 },
      { text: "2", image: rightbed1 },
      { text: "3", image: wrongbed2 },
      { text: "4", image: wrongbed3 }
    ],
    correctAnswer: 1,
    explanation: "The Serta model numbers starts with '500' and beds are not serialized so only the model is needed."
  },
  {
    id: 2,
    question: "Which is the correct Bosch serial number?",
    options: [
      { text: "1", image: wrongbosch1 },
      { text: "2", image: wrongbosch2 },
      { text: "3", image: wrongbosch3 },
      { text: "4", image: rightbosch1 }
    ],
    correctAnswer: 3,
    explanation: "Bosch and Thermador serial numbers are 9 digits long."
  },
  {
    id: 3,
    question: "Which is the correct LG serial number?",
    options: [
      { text: "1", image: rightlg1 },
      { text: "2", image: wronglg1 },
      { text: "3", image: wronglg2 },
      { text: "4", image: wronglg3 }
    ],
    correctAnswer: 0,
    explanation: "This brand the named serial number is actually the serial number."
  },
  {
    id: 4,
    question: "Which is the correct LG Microwave serial number?",
    options: [
      { text: "1", image: wrongmw1 },
      { text: "2", image: rightmw1 },
      { text: "3", image: wrongmw2 },
      { text: "4", image: wrongmw3 }
    ],
    correctAnswer: 1,
    explanation: "LG serial numbers and the same serial numbers D&B uses."
  },
  {
    id: 5,
    question: "Which is the correct Fisher Paykel serial number?",
    options: [
      { text: "1", image: rightfp1 },
      { text: "2", image: wrongfp1 },
      { text: "3", image: wrongfp2 },
      { text: "4", image: wrongfp3 }
    ],
    correctAnswer: 0,
    explanation: "It is the one below the barcode."
  },
  {
    id: 6,
    question: "Which is the correct Miele serial number?",
    options: [
      { text: "1", image: wrongmiele1 },
      { text: "2", image: wrongmiele2 },
      { text: "3", image: rightmiele1 },
      { text: "4", image: wrongmiele3 }
    ],
    correctAnswer: 2,
    explanation: "It is the small one with a number off to the side. Sometimes that single number is included, record it just in case."
  },
  {
    id: 8,
    question: "Which location is Meridian Floor?",
    options: [
      { text: "200", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "500", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "600", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "300", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ],
    correctAnswer: 3,
    explanation: "Meridian is out of box and wrapped."
  },
  {
    id: 7,
    question: "Which location is Burlington?",
    options: [
      { text: "200", image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "500", image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "600", image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "300", image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ],
    correctAnswer: 2,
    explanation: "Burlington has both boxed and unboxed items."
  },
  {
    id: 9,
    question: "which location is Hannegan Floor?",
    options: [
      { text: "200", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "500", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "600", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "300", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ],
    correctAnswer: 0,
    explanation: "Hannegan floor is out of box and wrapped."
  },
  {
    id: 10,
    question: "What is my favorite color?",
    options: [
      { text: "Blue", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "Green", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "Yellow", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { text: "Red", image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ],
    correctAnswer: 2,
    explanation: "Yellow is"
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (showAnswer) return;
    
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Excellent! You're a quiz master! 🏆";
    if (percentage >= 70) return "Great job! Well done! 👏";
    if (percentage >= 50) return "Good effort! Keep learning! 📚";
    return "Keep practicing! You'll improve! 💪";
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full text-center">
          <div className="mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h1>
            <p className="text-sm sm:text-base text-gray-600">You've answered all 10 questions</p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-4 sm:p-6 mb-6">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{score}/{questions.length}</div>
            <div className="text-base sm:text-lg text-gray-700 mb-2">
              {((score / questions.length) * 100).toFixed(0)}% Correct
            </div>
            <p className="text-sm sm:text-base text-gray-600">{getScoreMessage()}</p>
          </div>

          <button
            onClick={resetQuiz}
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2 mx-auto text-sm sm:text-base min-h-[48px] touch-manipulation"
          >
            <RotateCcw className="w-5 h-5" />
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8 max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-xs sm:text-sm font-medium text-blue-600">
              Score: {score}/{currentQuestion + (showAnswer ? 1 : 0)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center leading-tight px-2">
            {question.question}
          </h2>
        </div>

        {/* Answer Options Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const isWrong = isSelected && !isCorrect && showAnswer;
            
            let cardClass = "relative aspect-square rounded-xl border-3 transition-all duration-300 cursor-pointer overflow-hidden group active:scale-95 ";
            
            if (!showAnswer) {
              cardClass += "border-gray-200 hover:border-blue-400 hover:shadow-lg transform hover:scale-105 active:border-blue-500";
            } else if (isCorrect) {
              cardClass += "border-green-500 shadow-lg scale-105";
            } else if (isWrong) {
              cardClass += "border-red-500 shadow-lg";
            } else {
              cardClass += "border-gray-200 opacity-60";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className={cardClass}
                disabled={showAnswer}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img 
                    src={option.image} 
                    alt={option.text}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-4">
                    <span className="text-white font-semibold text-sm sm:text-lg leading-tight">{option.text}</span>
                  </div>
                </div>

                {/* Status Icon */}
                {showAnswer && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                    {isCorrect && (
                      <div className="bg-green-500 rounded-full p-1">
                        <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      </div>
                    )}
                    {isWrong && (
                      <div className="bg-red-500 rounded-full p-1">
                        <XCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      </div>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showAnswer && question.explanation && (
          <div className="bg-blue-50 rounded-xl p-4 sm:p-6 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Explanation:</h3>
            <p className="text-blue-700 text-sm sm:text-base leading-relaxed">{question.explanation}</p>
          </div>
        )}

        {/* Next Button */}
        {showAnswer && (
          <div className="flex justify-center px-4">
            <button
              onClick={handleNextQuestion}
              className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base min-h-[48px] touch-manipulation"
            >
              {currentQuestion === questions.length - 1 ? 'View Results' : 'Next Question'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;