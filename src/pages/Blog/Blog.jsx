import React from 'react';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const Blog = () => {
    return (
        <div className='mt-5 container bg-light rounded p-5'>
            <Pdf targetRef={ref} filename="Important-interview-question.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='btn btn-danger mb-5'>Generate Pdf</button>}
            </Pdf>
            <div className ='text-align-justify ms-5 mt-5' ref={ref}>
                <h4>Question-1:  Tell us the differences between uncontrolled and controlled components.</h4>
                <p><small><b>Answer:</b>  Controlled components are those in React that have their state and behaviour managed by the parent component. To modify their state and behaviour, these components rely on props that are sent down from the parent component. Components that control their own state on an internal level are referred to as uncontrolled components.</small></p>
                <h4>Question-2:  How to validate React props using PropTypes</h4>
                <p><small><b>Answer:</b>  To prevent issues and failures, we must structure and declare props while creating a React application. Similar to how a function could have required arguments, a React component might need a prop to be defined in order to render correctly. Our app might act unpredictably if a required prop is not passed to a component that requires it.</small></p>
                <h4>Question-3:  Tell us the difference between nodejs and express js.</h4>
                <p><small><b>Answer:</b>  Java web application framework offering a rich feature set for both web and mobile applications. In other words, Express is a framework that sits on top of NodeJS and assists in handling requests and responses, whereas NodeJS is the package that offers the JavaScript run-time environment.</small></p>
                <h4>Question-4:  What is a custom hook, and why will you create a custom hook?</h4>
                <p><small><b>Answer:</b>  Reusability is provided by custom React JS hooks because once a custom hook is built, it can be used repeatedly, making the code cleaner and taking less time to write. Additionally, it speeds up code rendering because a custom hook doesn't have to be rendered repeatedly while the entire code is being rendered.</small></p>
            </div>
        </div>
    );
};

export default Blog;