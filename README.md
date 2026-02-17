Day 4/10 – Weather App 🌦️

Built a weather application using real-time API data.
Learned how to fetch data, handle JSON responses,
and manage errors in JavaScript.

Tech Stack: HTML, CSS, JavaScript, OpenWeather API

#APIs #JavaScript #WebDevelopment #LearningInPublic


1️⃣ Synchronous vs Asynchronous (The Core Idea)
Synchronous → Things happen one after another, in order.
Asynchronous → Things can happen at the same time, or later, without stopping the main program.

🔹 Example of synchronous (normal JS)

console.log("Start");
console.log("Middle");
console.log("End");


Output:
Start
Middle
End
✅ Everything happens line by line

🔹 Example of asynchronous
console.log("Start");
setTimeout(() => {
    console.log("Waited 2 seconds");
}, 2000);
console.log("End");


Output:
Start
End
Waited 2 seconds

Notice:
JS did not stop at setTimeout
The code after it (console.log("End")) runs immediately
The setTimeout runs later, asynchronously

2️⃣ Why asynchronous is important

Some tasks take time:
Fetching data from a server (like OpenWeather API)
Reading a file
Waiting for user input
If JS waited synchronously for these, your browser would freeze until it’s done.

With asynchronous, JS can:
Start the request
Keep running other code
Come back when the data is ready
This is exactly what happens with your Weather App.


3️⃣ Example in your Weather App
const response = await fetch(url);
const data = await response.json();

Step by step:
fetch(url) → Sends request to OpenWeather API
Takes some time (network latency)
JS doesn’t freeze — browser still works
await → “Pause this function until the request finishes”
Other things in your page can still run (buttons clickable, animations, etc.)
Once API responds → response.json() converts data → we can use it

✅ The asynchronous part is the request and waiting for data, instead of blocking everything.
