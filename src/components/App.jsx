import React, { useState } from "react";
import Notification from "./Notification";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

const FeedbackApp = () => {
const [feedback, setFeedback] = useState({
good: 0,
neutral: 0,
bad: 0,
});

const handleFeedback = (type) => {
setFeedback((prevFeedback) => ({
...prevFeedback,
[type]: prevFeedback[type] + 1,
}));
};

const countTotalFeedback = () => {
const { good, neutral, bad } = feedback;
return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
const { good } = feedback;
const total = countTotalFeedback();
return total === 0 ? 0 : Math.round((good / total) * 100);
};

const total = countTotalFeedback();
const positivePercentage = countPositiveFeedbackPercentage();

return (
<div>
<FeedbackOptions
     options={Object.keys(feedback)}
     onLeaveFeedback={handleFeedback}
   />
<Section title="Statistics">
{total > 0 ? (
<Statistics
         good={feedback.good}
         neutral={feedback.neutral}
         bad={feedback.bad}
         total={total}
         positivePercentage={positivePercentage}
       />
) : (
<Notification message="There is no feedback" />
)}
</Section>
</div>
);
};

export default FeedbackApp;
