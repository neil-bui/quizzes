import React, { useState } from 'react';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Quiz.css";

export default function Quiz() {
	const questions = [
		{
			questionText: 'You have to move out by the end of the month. Plan of attack?',
			answerOptions: [
				{ answerText: 'Head straight to your childhood room', answerPoints: 1 },
				{ answerText: 'Shack up in a hotel until you sign a new lease', answerPoints: 2 },
				{ answerText: 'Assemble the movers stat', answerPoints: 3 },
			],
		},
		{
			questionText: 'When the time comes for your semiannual teeth cleaning, you:',
			answerOptions: [
				{ answerText: 'Show up having flossed once', answerPoints: 1 },
				{ answerText: 'Bring earbuds to block out the sounds', answerPoints: 2 },
				{ answerText: 'Show up early with all the paperwork', answerPoints: 3 },
			],
		},
		{
			questionText: 'How much do you contribute to your 401(k)?',
			answerOptions: [
				{ answerText: 'That new club downtown?', answerPoints: 1 },
				{ answerText: 'Whatever you\'ll need for a 5-star vacay', answerPoints: 2 },
				{ answerText: 'You\'ve been maxing out since your first job', answerPoints: 3 },
			],
		},
		{
			questionText: 'At a networking event, you can be found:',
			answerOptions: [
				{ answerText: 'Hiding out in the last bathroom stall', answerPoints: 1 },
				{ answerText: 'Taking a shot for every collected biz card', answerPoints: 2 },
				{ answerText: 'Pitching your personal brand to the speaker', answerPoints: 3 },
			],
		},
		{
			questionText: 'It\'s Friday night, and you just got paid. How do you make it rain?',
			answerOptions: [
				{ answerText: 'Throw down hunnits on booze', answerPoints: 1 },
				{ answerText: 'A full-body massage', answerPoints: 2 },
				{ answerText: 'Splurgin on a self-regulating indoor garden', answerPoints: 3 },
			],
		},
	];

	const questions3 = [
		{
			questionText: 'Are you dog?',
			answerOptions: [
				{ answerText: 'Yes', answerPoints: 4 },
				{ answerText: 'No', answerPoints: 3 },
				{ answerText: 'Sometimes', answerPoints: 2 },
				{ answerText: 'I plead the fifth', answerPoints: 1 },
			],
		},
		{
			questionText: 'What are you doing on the computer?',
			answerOptions: [
				{ answerText: 'Bird vids', answerPoints: 4 },
				{ answerText: 'FaceTiming my friend', answerPoints: 3 },
				{ answerText: 'Ordering dog toys', answerPoints: 2 },
				{ answerText: 'Watching Air Bud', answerPoints: 1 },
			],
		},
		{
			questionText: 'Do your humans know you go on their computer?',
			answerOptions: [
				{ answerText: 'Yes', answerPoints: 4 },
				{ answerText: 'No', answerPoints: 3 },
				{ answerText: 'They generally don\'t know anything', answerPoints: 2 },
				{ answerText: 'Not yet', answerPoints: 1 },
			],
		},
		{
			questionText: 'Are you helping them code?',
			answerOptions: [
				{ answerText: 'Yes', answerPoints: 4 },
				{ answerText: 'No', answerPoints: 3 },
				{ answerText: 'I do everything around this house', answerPoints: 2 },
				{ answerText: 'I don\'t enjoy being helpful', answerPoints: 1 },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	let result, details = "";

	if (score > 10) {
		result = "Alex Dunphy from Modern Family";
		details = "So you've mapped out your retirement home. Having your ducks in a row is great! But you're still young and should live a little. Knowing how to critique fine wines doesn't make you better, just boring. When you're older, you'll regret missing the party.";
	} else if (score > 5) {
		result = "Caroline from 2 Broke Girls";
		details = "You're halfway there, but you think every adult deed is a major accomplishment. Your reward? Acting like every paid bill warrants a new bag. Buying new things is therapeutic, but blindly dropping $$$ on big expensees could be bad. Dial back on the gold stars, and stick to one or two reward-worthy feats.";
	} else {
		result = "Phoebe from Friends";
		details = "Are you wearing a diaper? Because you revert to childhood when it comes to coping with life. Yeah, holding on to innocence keeps you from becoming a total snoozefest, but acting more tween than adult gets you nowhere in the real world and may strain relationships. Try a new adult thing every week - it'll become second nature.";
	}

	const handleAnswerOptionClick = (answerPoints) => {
		setScore(score + answerPoints);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const restartQuiz = () => {
		setShowScore(false);
		setCurrentQuestion(0);
		setScore(0);
	};

	return (

		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<div className='personal-score'>
						<h3 className='results'>{result}</h3>
						<p className="details">{details}</p>
					</div>
					<div className='buttons'>
						<div className='share-buttons'>
							<FacebookShareButton
								url={window.location.href}
								//url={"https://www.dorkaholics.com"}
								quote={result}
								description={result}
								className="share-button"
								appID={173133643329240}
							>
								<FacebookIcon size={24} round />Share to Facebook
							</FacebookShareButton>
							<></>
							<TwitterShareButton
								title={result}
								url={window.location.href}
								hashtags={["dorkaholics"]}
								className="share-button"
							>
								<TwitterIcon size={24} round />Share to Twitter
							</TwitterShareButton>
						</div>
						<div className='restart-button'>
							<button className="restart-button" onClick={() => restartQuiz()} type="button" class="btn btn-danger btn-small my-1">🔄 Restart Quiz</button>
						</div>
					</div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.answerPoints)} type="button" class="btn btn-danger btn-small my-1">{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
