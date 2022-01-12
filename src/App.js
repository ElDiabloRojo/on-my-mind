import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = function () {
	const [thought, setThought] = useState(null);

	const [content, setContent] = useState("");
	const [feeling, setFeeling] = useState("");
	useEffect(() => {
		axios
			.get("/api/thoughts")
			.then((thought) => setThought(thought))
			.catch((err) => console.log(err));
	}, []);

	function submitForm() {
		if (content === "") {
			alert("Please include your thought");
			return;
		}
		if (feeling === "") {
			alert("Please include a feeling");
			return;
		}
		axios
			.post("/api/thoughts", {
				content: content,
				feeling: feeling,
			})
			.then(function () {
				alert("Thought created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not create thought. Please try again");
			});
	}
	return (
		<>
			<h1>My Project</h1>
			{thought === null ? (
				<p>Loading...</p>
			) : thought.length === 0 ? (
				<p>No user available</p>
			) : (
				<>
					<h2>Available Thoughts</h2>
					<ol>
						{thought.map((user, index) => (
							<li key={index}>
								Thought: {thought.content} - Feeling: {thought.feeling}
							</li>
						))}
					</ol>
				</>
			)}

			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setContent(e.target.value)}
					type="text"
					placeholder="Enter your thought"
				/>
				<input
					onChange={(e) => setFeeling(e.target.value)}
					type="text"
					placeholder="Enter your feeling"
				/>
				<input type="submit" />
			</form>
		</>
	);
};
export default App