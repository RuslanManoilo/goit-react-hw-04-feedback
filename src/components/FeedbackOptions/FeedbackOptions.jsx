import { Btn } from "./FeedbackOptions.styled";

const FeedbackOptions = ({onLeaveFeedback, options, title}) => {
    return (
        options.map(option => (
            <Btn id={option} key={option} onClick={onLeaveFeedback}>
                {(option).toUpperCase()}
            </Btn>)
        )
    );
};


export default FeedbackOptions;