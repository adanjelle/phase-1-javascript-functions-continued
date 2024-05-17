function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun()); 

  function mondayWork(activity ="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  console.log(mondayWork())

  function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("awesome")); // You are !!!awesome!!!!


