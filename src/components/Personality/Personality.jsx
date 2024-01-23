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
  StyledSpinner,
  Loading,
  LoadingBar,
} from "./Personality.elements";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import statements from "../../utils/statements";
import statements2 from "../../utils/statements2";
import statements3 from "../../utils/statements3";
import statements4 from "../../utils/statements4";
import statements5 from "../../utils/statements5";
import charact1 from "../../assets/character1.png";
import charact2 from "../../assets/character2.png";
import charact3 from "../../assets/character3.png";
import charact4 from "../../assets/character4.png";
import charact5 from "../../assets/character5.png";
import charact6 from "../../assets/character6.png";
import charact7 from "../../assets/character7.png";
import charact8 from "../../assets/character8.png";
import charact9 from "../../assets/character9.png";
import charact10 from "../../assets/character10.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/userRedux";
import { setQuizResults, setResultText } from "../../redux/quizSlice";

const Personality = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(statements.length).fill(0));
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentStatements, setCurrentStatements] = useState(statements);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [resultPage, setResultPage] = useState(0);
  const [inputs, setInputs] = useState({});
  const [isRegistering, setIsRegistering] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const calculateTotalScore = () => {
    return answers.reduce((total, answer) => {
      const questionScore = answer;
      return total + questionScore;
    }, 0);
  };

  const renderResultContent = () => {
    const scoreDetails = getScoreDetails();

    const quotesAndSpells = {
      range1: {
        quote: "Quote for range 1",
        spell: "Spell for range 1",
      },
      range2: {
        quote: "Quote for range 2",
        spell: "Spell for range 2",
      },
      range3: {
        quote: "Quote for range 3",
        spell: "Spell for range 3",
      },
      range4: {
        quote: "Quote for range 4",
        spell: "Spell for range 4",
      },
      range5: {
        quote: "Quote for range 5",
        spell: "Spell for range 5",
      },
      range6: {
        quote: "Quote for range 6",
        spell: "Spell for range 6",
      },
      range7: {
        quote: "Quote for range 7",
        spell: "Spell for range 7",
      },
      range8: {
        quote: "Quote for range 8",
        spell: "Spell for range 8",
      },
      range9: {
        quote: "Quote for range 9",
        spell: "Spell for range 9",
      },
      range10: {
        quote: "Quote for range 10",
        spell: "Spell for range 10",
      },
    };

    const currentContent = quotesAndSpells[scoreDetails.category] || {
      quote: "Default quote if score doesn't match any range",
      spell: "Default spell if score doesn't match any range",
    };

    dispatch(setResultText(currentContent));

    switch (resultPage) {
      case 0:
        return (
          <div>
            <p>{currentContent.quote}</p>
            <p>Your email: user@example.com</p>
          </div>
        );
      case 1:
        return (
          <div>
            <p>{currentContent.spell}</p>
            <p>Your email: user@example.com</p>
          </div>
        );
      case 2:
        return (
          <div>
            <form onSubmit={handleSignUp}>
              <LoginSignSubHeader>
                زودنا بمعلوماتك لإنشاء حساب وسنرسل لك نتائجك المفصلة على ايميلك
              </LoginSignSubHeader>
              <LoginSignInput
                name="email"
                placeholder="ايميل"
                onChange={handleChange}
              />
              <LoginSignInput
                type="password"
                name="password"
                placeholder="كلمة السر"
                onChange={handleChange}
              />
              <RegistarButton type="submit" onClick={handleSignUp}>
                {isRegistering ? <LoadingBar /> : "إنشاء حساب"}
              </RegistarButton>
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
    const maxTotalScore = currentStatements.length * maxScorePerQuestion;
    let scoreDetails = {
      svg: null,
      category: "",
    };

    const scoreRanges = [
      { limit: maxTotalScore / 10, svg: charact1, category: "range1" },
      { limit: (maxTotalScore * 2) / 10, svg: charact2, category: "range2" },
      { limit: (maxTotalScore * 3) / 10, svg: charact3, category: "range3" },
      { limit: (maxTotalScore * 4) / 10, svg: charact4, category: "range4" },
      { limit: (maxTotalScore * 5) / 10, svg: charact5, category: "range5" },
      { limit: (maxTotalScore * 6) / 10, svg: charact6, category: "range6" },
      { limit: (maxTotalScore * 7) / 10, svg: charact7, category: "range7" },
      { limit: (maxTotalScore * 8) / 10, svg: charact8, category: "range8" },
      { limit: (maxTotalScore * 9) / 10, svg: charact9, category: "range9" },
      { limit: maxTotalScore, svg: charact10, category: "range10" },
    ];

    // Find the appropriate score range
    const matchedRange = scoreRanges.find((range) => totalScore <= range.limit);
    if (matchedRange) {
      scoreDetails.svg = matchedRange.svg;
      scoreDetails.category = matchedRange.category;
    } else {
      // Handle the case where the score is above the maximum expected score
      scoreDetails.svg = charact10; // replace with an actual image reference
      scoreDetails.category = "aboveRange";
    }

    return scoreDetails;
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

  const handleNextPage = () => {
    if (resultPage < 2) {
      setResultPage((prevPage) => prevPage + 1);
    } else {
      // Redirect the user to a different page, for example, '/results'
      navigate("/signup");
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsRegistering(true); // Start spinner
    try {
      await dispatch(register(inputs)).unwrap();
      navigate("/outcome"); // Redirect on successful registration
      setIsRegistering(false); // Stop spinner on success
    } catch (error) {
      setIsRegistering(false); // Stop spinner on failure
      // Handle the error (e.g., setRegistrationError)
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

  const statementSets = [
    statements,
    statements2,
    statements3,
    statements4,
    statements5,
  ];

  useEffect(() => {
    if (currentQuestion >= currentStatements.length) {
      const currentSetIndex = statementSets.indexOf(currentStatements);
      const nextSetIndex = currentSetIndex + 1;

      if (nextSetIndex < statementSets.length) {
        const nextStatements = statementSets[nextSetIndex];
        setCurrentStatements(nextStatements);
        setAnswers(Array(nextStatements.length).fill(0));
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
  }, [currentQuestion, currentStatements, showScore, statementSets]);

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
                  اكتشف المزيد عن نفسك من خلال اختبار الشخصية. بيساعدك في فهم
                  نقاط القوة والضعف لديك، وكيفية التفاعل مع الآخرين، وفي اتخاذ
                  قرارات أفضل في حياتك المهنية والشخصية.
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
                  $current={index === currentQuestion}
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
                          $borderColor={option.borderColor}
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
                              $borderColor={option.borderColor}
                              $selected={answers[index] === optionIndex + 1}
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
