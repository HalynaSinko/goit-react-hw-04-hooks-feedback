import { useState } from "react";

import Section from "./Components/Section";
import FeedbackOptions from "./Components/FeedbackOptions";
import Statistics from "./Components/Statistics";
import Home from "./Components/Home";

import { FEEDBACK_OPTIONS } from "./data/constants";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = ({ target }) => {
    const { raiting } = target.dataset;
    switch (raiting) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((good / total) * 100) : 0;
  };

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Home />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={FEEDBACK_OPTIONS}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// handleFeedback = ({ target }) => {
//   const { raiting } = target.dataset;
//   this.setState((prevState) => ({ [raiting]: prevState[raiting] + 1 }));
// };

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// countPositiveFeedbackPercentage = () => {
//   const { good } = this.state;
//   const total = this.countTotalFeedback();
//   return total ? Math.round((good / total) * 100) : 0;
// };

//   render() {
//     console.log(this.countTotalFeedback);
//     const { good, neutral, bad } = this.state;

// const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Home />
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={FEEDBACK_OPTIONS}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
