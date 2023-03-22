// 10-3-23 //
//1.dom to print time between 2 days(hrs and min)//


var day=prompt("Enter the day 1:");
			var days=prompt("Enter the day2:");
			time1=Date.parse(day);
			time2=Date.parse(days);
			anstime = time1 - time2;
			if(anstime < 0){
			anstime = anstime*-1;
			}
			let hour=(anstime/3600000);
			console.log(hour  +"hours");
			let minutes=hour*60;
			console.log(minutes +"minutes");	

