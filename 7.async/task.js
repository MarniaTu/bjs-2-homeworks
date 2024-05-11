"use strict";

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === null || callback === undefined) {
			throw new Error("Отсутствуют обязательные аргументы");

		} else if (this.alarmCollection.find(alarm => alarm.time === time)) {
			console.warn("Уже присутствует звонок на это же время");
		}

		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	removeClock(time) {

		if (this.alarmCollection.find(alarm => alarm.time === time)) {

			this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
		}
	}

	getCurrentFormattedTime() {

		let currentFormattedTime = new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
		return currentFormattedTime;
	}


	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {

			this.alarmCollection.forEach((alarm) => {

				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {

					alarm.callback();
					alarm.canCall = false;
				}
			});
		}, 1000);


	}


	stop() {

		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {

		this.alarmCollection.forEach(alarm => alarm.canCall = true);
	}


	clearAlarms() {

		this.stop();
		this.alarmCollection = [];
	}

}