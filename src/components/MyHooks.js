import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

function MyHooks() {
  const [count, setCount] = useState(100);
  const [age, setAge] = useState(26);
  const [post, setPost] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("Count Updated", count);
  }, [count]);
  useEffect(() => {
    console.log("Age Updated", age);
    document.title = "My age is " + age;
  }, [age]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>I am hook , I am awesome</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      <button onClick={() => setCount(100)}>Reset</button>
      <hr></hr>
      <h3>Age : {age}</h3>
      <button onClick={() => setAge(age + 1)}>Increase</button>
      <button onClick={() => setAge(age - 1)}>Decrease</button>
      <hr></hr>
      <div>
        <h1> My name is {user.name}</h1>
        <h1>My Email is {user.email}</h1>
      </div>
      <div>
        {Object.keys(post).length > 0 && (
          <>
            <h3> Title : {post.title}</h3>
            <p>
              <strong>Body : {post.body}</strong>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default MyHooks;
