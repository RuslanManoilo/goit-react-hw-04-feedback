import { Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        options.map(option => (
            <Btn id={option} key={option} onClick={onLeaveFeedback}>
                {(option).toUpperCase()}
            </Btn>)
        )
    );
};