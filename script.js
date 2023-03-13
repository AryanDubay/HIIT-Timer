		// User input
		let warmupTimeInput = document.getElementById("warmup");
		let workoutTimeInput = document.getElementById("workout");
		let restTimeInput = document.getElementById("rest");
		let roundsInput = document.getElementById("rounds");

		// makes the timer in startup
		let currentRound = 1;
		let currentInterval = "warmup";
		let remainingTime = parseInt(warmupTimeInput.value);
		let isRunning = false;
		let intervalId = null;

		// Timer functions
		function updateCountdown() {
			const minutes = Math.floor(remainingTime / 60).toString().padStart(2, "0");
			const seconds = (remainingTime % 60).toString().padStart(2, "0");
			document.getElementById("countdown").textContent = `${minutes}:${seconds}`;
		}

		function startTimer() {
			if (!isRunning) {
				isRunning = true;
				intervalId = setInterval(updateTimer, 1000);
			}else{
        }//does nothing!
		}

		function pauseTimer() {
			clearInterval(intervalId);
			isRunning = false;
		}

		function resetTimer() {
			currentRound = 1;
			currentInterval = "warmup";
			remainingTime = parseInt(warmupTimeInput.value);
			isRunning = false;
			clearInterval(intervalId);
			updateCountdown();
		}

		function updateTimer() {
			if (remainingTime > 0) {
				remainingTime--;
				updateCountdown();
			} else {
				if (currentInterval === "warmup") {
					currentInterval = "workout";
					remainingTime = parseInt(workoutTimeInput.value);
				} else if (currentInterval === "workout") {
					currentInterval = "rest";
					remainingTime = parseInt(restTimeInput.value);
				} else if (currentInterval === "rest") {
					currentInterval = "workout";
					remainingTime = parseInt(workoutTimeInput.value);
					currentRound++;
				}

				if (currentRound <= parseInt(roundsInput.value)) {
					updateCountdown
				} else {
					// All rounds are completed
					pauseTimer();
					alert("Workout Finished!");
				}
			}
		}

		// Event listeners
		document.getElementById("start").addEventListener("click", startTimer);
		document.getElementById("pause").addEventListener("click", pauseTimer);
		document.getElementById("reset").addEventListener("click", resetTimer);

		// Initialize countdown
		updateCountdown();