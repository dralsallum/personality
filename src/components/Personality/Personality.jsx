import React, { useState, useEffect, useRef } from "react";
import {
  QuizBody,
  ScoreSection,
  QuestionSection,
  QuestionCount,
  QuestionCountSpan,
  QuestionBut,
  AnswerSection,
  ResMid,
  ResTySp,
  QuizFieldset,
  QuizDiv,
  ScoreSectionbackground,
  ScoreSectionProgress,
  ScoreSectioTwo,
  QuizCon,
  FieldDiv,
  ResCon,
  ResBox,
  ResBot,
  ResBor,
  ResHr,
  ResCar,
  ResFie,
  ResAll,
  ResTop,
  ResTit,
  ResSubTit,
  ResTyCon,
  ResImg,
  ResOp,
  ResOpBut,
  ResRoof,
  ResDot,
  QueSpa,
  IntroBod,
  IntroText,
  Intro,
  OpCon,
  OpMain,
  OpImg,
  OpText,
  OpSubText,
  LoginSignInput,
  LoginSignSubHeader,
  RegistarButton,
  ProgressCal,
  ProgressCon,
} from "./Personality.elements";
import statements from "../../utils/statements";
import statements2 from "../../utils/statements2";
import statements3 from "../../utils/statements3";
import lowScoreSVG from "../../assets/character1.png";
import mediumScoreSVG from "../../assets/character2.png";
import highScoreSVG from "../../assets/character3.png";
import extraHighScoreSVG from "../../assets/character2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/userRedux";
import { setQuizResults } from "../../redux/quizSlice";

const Personality = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(statements.length).fill(0));
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentStatements, setCurrentStatements] = useState(statements);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [resultPage, setResultPage] = useState(0);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPart, setCurrentPart] = useState(1);

  const calculateTotalScore = () => {
    return answers.reduce((total, answer, index) => {
      const questionScore = answer;
      return total + questionScore;
    }, 0);
  };

  const renderResultContent = () => {
    const scoreDetails = getScoreDetails();
    const motivationQuotes = {
      low: "Quote for low score",
      medium: "Quote for medium score",
      high: "Quote for high score",
      extraHigh: "Quote for extra high score",
    };

    const spellQuotes = {
      low: "Spell for low score",
      medium: "Spell for medium score",
      high: "Spell for high score",
      extraHigh: "Spell for extra high score",
    };

    switch (resultPage) {
      case 0:
        return (
          <div>
            <p>{motivationQuotes[scoreDetails.category]}</p>
            <p>Your email: user@example.com</p>
          </div>
        );
      case 1:
        return (
          <div>
            <p>{spellQuotes[scoreDetails.category]}</p>
            <p>Your email: user@example.com</p>
          </div>
        );
      case 2:
        return (
          <div>
            <form action="">
              <LoginSignSubHeader>
                زودنا ببريدك الالكتروني لصنع حساب لك وسنرسل لك نتائجك المفصلة
                على ايميلك
              </LoginSignSubHeader>
              <LoginSignInput
                name="email"
                placeholder="ايميل"
                onChange={handleChange}
              />
              <LoginSignInput
                type="password"
                name="password"
                placeholder="باسورد"
                onChange={handleChange}
              />
              <RegistarButton type="submit">تسجيل حساب جديد</RegistarButton>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  const getScoreDetails = () => {
    const totalScore = calculateTotalScore();
    const maxScorePerQuestion = 7;
    const maxTotalScore = statements.length * maxScorePerQuestion;
    let scoreDetails = {
      svg: null,
      category: "",
    };

    if (totalScore <= maxTotalScore / 4) {
      scoreDetails.svg = lowScoreSVG;
      scoreDetails.category = "low";
    } else if (totalScore <= maxTotalScore / 2) {
      scoreDetails.svg = mediumScoreSVG;
      scoreDetails.category = "medium";
    } else if (totalScore <= maxTotalScore) {
      scoreDetails.svg = highScoreSVG;
      scoreDetails.category = "high";
    } else {
      scoreDetails.svg = extraHighScoreSVG;
      scoreDetails.category = "extraHigh";
    }

    return scoreDetails;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(inputs));
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const questionRefs = useRef([]);
  questionRefs.current = [];

  const addToRefs = (el) => {
    if (el && !questionRefs.current.includes(el)) {
      questionRefs.current.push(el);
    }
  };

  const navigate = useNavigate();

  const handleNextPage = () => {
    if (resultPage < 2) {
      setResultPage((prevPage) => prevPage + 1);
    } else {
      // Redirect the user to a different page, for example, '/results'
      navigate("/outcome");
    }
  };

  const getPersonalityType = () => {
    const scoreCategory = getScoreDetails().category;
    const personalityTypes = {
      low: "Type for low score",
      medium: "Type for medium score",
      high: "Type for high score",
      extraHigh: "Type for extra high score",
    };

    return personalityTypes[scoreCategory];
  };

  const scoreDetails = getScoreDetails();

  const scoreOptions =
    screenWidth > 768
      ? [
          { size: "45px", borderColor: "#88619a" },
          { size: "35px", borderColor: "#88619a" },
          { size: "28px", borderColor: "#88619a" },
          { size: "25px", borderColor: "#9b9faa" },
          { size: "28px", borderColor: "#33a474" },
          { size: "35px", borderColor: "#33a474" },
          { size: "45px", borderColor: "#33a474" },
        ]
      : [
          // Smaller sizes for screens with max-width: 768px
          { size: "30px", borderColor: "#88619a" },
          { size: "25px", borderColor: "#88619a" },
          { size: "17px", borderColor: "#88619a" },
          { size: "15px", borderColor: "#9b9faa" },
          { size: "17px", borderColor: "#33a474" },
          { size: "25px", borderColor: "#33a474" },
          { size: "30px", borderColor: "#33a474" },
        ];

  const handleAnswerSelect = (questionIndex, selectedScore) => {
    let newAnswers = [...answers];
    newAnswers[questionIndex] = selectedScore;
    setAnswers(newAnswers);

    // Proceed to next question or end of current statement set
    if (questionIndex < currentStatements.length - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setCurrentQuestion(currentQuestion + 1); // This will trigger the useEffect
    }
  };

  useEffect(() => {
    // Scrolling to the current question
    if (currentQuestion < questionRefs.current.length) {
      questionRefs.current[currentQuestion].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    // Handling window resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestion >= currentStatements.length) {
      if (currentStatements === statements) {
        setCurrentStatements(statements2);
        setAnswers(Array(statements2.length).fill(0));
        setCurrentQuestion(0);
      } else if (currentStatements === statements2) {
        setCurrentStatements(statements3);
        setAnswers(Array(statements3.length).fill(0));
        setCurrentQuestion(0);
      } else {
        setShowScore(true);
        setScore(answers.reduce((total, answer) => total + answer, 0));
      }
    }

    // Calculate and dispatch score after the quiz completion
    if (showScore) {
      const totalScore = calculateTotalScore();
      const scoreDetails = getScoreDetails(totalScore);
      dispatch(setQuizResults({ totalScore, scoreDetails }));
    }
  }, [currentQuestion, currentStatements, showScore]);

  return (
    <>
      {showScore ? (
        <ResCon>
          <ResBox>
            <ResBor>
              <ResHr />
              <ResCar>
                <ResFie>
                  <ResAll>
                    <ResTop></ResTop>
                    <ResTit>نوع شخصيتك هو</ResTit>
                    <ResSubTit>{getPersonalityType()}</ResSubTit>
                    <ResTyCon>
                      <ResTySp></ResTySp>
                      اي تي م - الف
                    </ResTyCon>
                    <ResMid>
                      <ResImg src={scoreDetails.svg} alt="score indicator" />
                      <br />

                      <ProgressCon>
                        <ProgressCal
                          value={calculateTotalScore()}
                          max={statements.length * 7}
                        />
                      </ProgressCon>
                    </ResMid>
                    <ResBot>{renderResultContent()}</ResBot>
                  </ResAll>
                  <ResOp>
                    <ResRoof>
                      {[...Array(3)].map((_, index) => (
                        <ResDot
                          key={index}
                          onClick={() => setResultPage(index)}
                          style={{
                            backgroundColor:
                              resultPage === index ? "#4298b4" : "#ccc",
                            cursor: "pointer",
                          }}
                        />
                      ))}
                    </ResRoof>

                    <ResOpBut onClick={handleNextPage}>التالي</ResOpBut>
                  </ResOp>
                </ResFie>
              </ResCar>
            </ResBor>
          </ResBox>
        </ResCon>
      ) : (
        <div>
          <IntroBod>
            <IntroText>اختبار مجاني لتحديد الشخصية</IntroText>
            <Intro>من نوع نوريس®</Intro>
          </IntroBod>
          <OpCon>
            <OpMain>
              <OpImg
                src="https://www.16personalities.com/static/images/test-header-2.svg"
                alt=""
              />
              <OpText>
                <OpSubText>
                  كُن على طبيعتك وأجِب على الأسئلة بكل صدق وأمانة، لتتمكن من
                  اكتشاف أعماق شخصيتك والتعرف على نمطها بشكل أدق.
                </OpSubText>
              </OpText>
            </OpMain>
            <OpMain>
              <OpImg
                src="https://www.16personalities.com/static/images/academy/explorers/icons/theory.svg"
                alt=""
              />
              <OpText>
                <OpSubText>
                  اكتشف كيف يمكن لنمط شخصيتك أن يؤثر في عدة مجالات من حياتك، من
                  العلاقات الاجتماعية وحتى الخيارات المهنية.
                </OpSubText>
              </OpText>
            </OpMain>
            <OpMain>
              <OpImg
                src="https://www.16personalities.com/static/images/academy/analysts/exercise.svg"
                alt=""
              />
              <OpText>
                <OpSubText>
                  تنمية شخصيتك وتطورك نحو أن تصبح الشخص الذي تحلم به يصبح أكثر
                  سهولة وفعالية مع باقتنا الفاخرة من الخدمات الإضافية المتاحة
                  لك.
                </OpSubText>
              </OpText>
            </OpMain>
          </OpCon>
          <QuizBody>
            <QuizCon>
              {currentStatements.map((statement, index) => (
                <QuizFieldset
                  key={statement.id}
                  ref={addToRefs}
                  current={index === currentQuestion}
                >
                  <FieldDiv>
                    <QueSpa>{statement.text}</QueSpa>
                  </FieldDiv>
                  <QuizDiv>
                    <ScoreSection>لا اتفق</ScoreSection>
                    <ScoreSectionProgress>
                      {scoreOptions.map((option, optionIndex) => (
                        <ScoreSectionbackground
                          key={optionIndex}
                          borderColor={option.borderColor}
                        >
                          <QuestionSection>
                            <QuestionCount
                              type="radio"
                              name={`question_${index}`}
                              onChange={() =>
                                handleAnswerSelect(index, optionIndex + 1)
                              }
                              checked={answers[index] === optionIndex + 1}
                            />
                            <QuestionCountSpan
                              size={option.size}
                              borderColor={option.borderColor}
                              selected={answers[index] === optionIndex + 1}
                            ></QuestionCountSpan>
                          </QuestionSection>
                        </ScoreSectionbackground>
                      ))}
                    </ScoreSectionProgress>
                    <ScoreSectioTwo>اتفق</ScoreSectioTwo>
                  </QuizDiv>
                </QuizFieldset>
              ))}
            </QuizCon>
          </QuizBody>
        </div>
      )}
      <AnswerSection>
        <QuestionBut>التالي</QuestionBut>
      </AnswerSection>
    </>
  );
};

export default Personality;
