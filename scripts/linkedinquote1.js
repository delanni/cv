// Paste this to your browser's console (cmd+option+i to conjure it up) and enjoy your wow-inducing quote
const randInt = ()=>Math.round(Math.random()*500);
const inspirationalQuote = `I HIRED a candidate with ${randInt()} yrs experience. You wouldn't believe the opposition I got! The HR Manager said he is "too old" and won’t  'fit into our culture.' She was not impressed.

This guy had been laid off by his previous employer due to restructuring at the age of 653 years. He kept applying for jobs but was rejected for being 'Overqualified' which led to his 'Employment Gap' reaching almost ${randInt()} year.  

Everyone is looking for that ${randInt()} year old with ${randInt()} years experience.

This guy brought an abundance of experience and taught me a lot that I never learned from all my years in the industry. You can’t Google Experience! Employers if you want the best talent, you need to be considering the 'OVERQUALIFIED' candidates. 

The truth is 'Overqualified' is really the code word for age discrimination. AGEISM in the workplace is very real and sadly quite acceptable. Our society needs to change. All that should matter is if the candidate has the right skills and attitude to do the job. 

It’s time to STOP discrimination on the grounds of a person’s age.
Agree?`
const w = window.open("about:blank", "", "_blank");
w.document.write(inspirationalQuote.replace(/\n/g, '<br />'));
