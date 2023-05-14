import "./App.css";
import Start from "./Components/Start";
import Timer from "./Components/Timer";
import Trivia from "./Components/Trivia";
import { useEffect, useMemo, useState } from "react";
function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned,setEarned]= useState("₹ 0");
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    
    {
      id: 4,
      question: "First use of modern paper",
      answers: [
        {
          text: "105AD",
          correct: true,
        },
        {
          text: "200AD",
          correct: false,
        },
        {
          text: "100AD",
          correct: false,
        },
        {
          text: "250AD",
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: "First use of modern paper",
      answers: [
        {
          text: "105AD",
          correct: true,
        },
        {
          text: "200AD",
          correct: false,
        },
        {
          text: "100AD",
          correct: false,
        },
        {
          text: "250AD",
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: "The birth of Buddha",
      answers: [
        {
          text: "486BC",
          correct: true,
        },
        {
          text: "200BC",
          correct: false,
        },
        {
          text: "100BC",
          correct: false,
        },
        {
          text: "250BC",
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question: "How many sunflowers were there in Van Gogh’s third version of the painting ‘Sunflowers’?",
      answers: [
        {
          text: "15",
          correct: false,
        },
        {
          text: "12",
          correct: true,
        },
        {
          text: "10",
          correct: false,
        },
        {
          text: "25",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: " In which 1963 classic film did Charles Bronson appear",
      answers: [
        {
          text: "The Great Escape",
          correct: true,
        },
        {
          text: "Jane Campion",
          correct: false,
        },
        {
          text: "Lucy Liu",
          correct: false,
        },
        {
          text: "Jason Statham",
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: "Which song did Michael release in September 1987?",
      answers: [
        {
          text: "bad",
          correct: true,
        },
        {
          text: "best",
          correct: false,
        },
        {
          text: "not bad",
          correct: false,
        },
        {
          text: "good",
          correct: false,
        },
      ],
    },

    {
      id: 10,
      question: "How old was Michael when he sadly passed away in 2009?",
      answers: [
        {
          text: "50",
          correct: true,
        },
        {
          text: "40",
          correct: false,
        },
        {
          text: "58",
          correct: false,
        },
        {
          text: "56",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question: "First use of modern paper",
      answers: [
        {
          text: "105AD",
          correct: true,
        },
        {
          text: "200AD",
          correct: false,
        },
        {
          text: "100AD",
          correct: false,
        },
        {
          text: "250AD",
          correct: false,
        },
      ],
    },

    {
      id: 12,
      question: "True or false: Michael won the 1984 Grammy award for the Record of the Year for the song ‘Beat It’?",
      answers: [
        {
          text: "True",
          correct: true,
        },
        {
          text: "False",
          correct: false,
        },
      ],
    },

    {
      id: 13,
      question: "True or false: Michael was the eighth of ten children?",
      answers: [
        {
          text: "True",
          correct: true,
        },
        {
          text: "False",
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: "In which year did Arsenal move to The Emirates Stadium from Highbury?",
      answers: [
        {
          text: "2006",
          correct: true,
        },
        {
          text: "2007",
          correct: false,
        },
        {
          text: "2009",
          correct: false,
        },
        {
          text: "2008",
          correct: false,
        },
      ],
    },

    {
      id: 15,
      question: "How many League goals did Jurgen Klinsmann score for Tottenham Hotspur during the 1994/1995 Premier League season during his 41 League starts – 19, 20 or 21?",
      answers: [
        {
          text: "21",
          correct: true,
        },
        {
          text: "20",
          correct: false,
        },
        {
          text: "15",
          correct: false,
        },
        {
          text: "20 and 21",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid= useMemo(()=>
  [
    {id:1,amount:"₹100"},
    {id:2,amount:"₹200"},
    {id:3,amount:"₹300"},
    {id:4,amount:"₹500"},
    {id:5,amount:"₹1000"},
    {id:6,amount:"₹2000"},
    {id:7,amount:"₹4000"},
    {id:8,amount:"₹8000"},
    {id:9,amount:"₹16000"},
    {id:10,amount:"₹32000"},
    {id:11,amount:"₹64000"},
    {id:12,amount:"₹12500"},
    {id:13,amount:"₹25000"},
    {id:14,amount:"₹50000"},
    {id:15,amount:"₹100000"},
  ].reverse(),
  []
  );
  
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="App">
     {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
      <div className="main">
      {timeOut? (
        <h1 className="endText">You earned: {earned} </h1>
        ) :(
        <>
       <div className="top">
          <div className="timer">
          <Timer
           setTimeOut={setTimeOut}
          questionNumber={questionNumber}
          />
          </div>
          </div>
           <div className="bottom">
      <Trivia 
       data={data} 
       questionNumber={questionNumber}
       setQuestionNumber={setQuestionNumber}
       setTimeout={setTimeout}
      />
    </div>
    </>
    )}
    </div>
    <div className="pyramid">
    <ul className="moneyList">
    {moneyPyramid.map((m) => (
      <li className={questionNumber == m.id ? "moneyListItem active":"moneyListItem"}
      >
       <span className="moneyListItemNumber">{m.id}</span>
       <span className="moneyListItemAmount">{m.amount}</span>
      </li>
    ))}  
    </ul>
    </div>
    </>
      )}
    </div>
  );
}
export default App;
