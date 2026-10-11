// The same six headline/description pairs as the original Google Sites embed.
const slogans = [
  {title:"Less clutter. More creativity.",description:"Spend less time organizing and more time creating."},
  {title:"Your photos. Your way.",description:"A simpler way to keep your photo collection organized."},
  {title:"Small tools. Big difference.",description:"Thoughtfully designed utilities for everyday tasks."},
  {title:"Keep it simple.",description:"Good software should make life easier."},
  {title:"Focus on what matters.",description:"Leave the repetitive work to the software."},
  {title:"Made for the Mac.",description:"Simple, useful tools that feel right at home."}
];
function updateSlogan(){
  const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Zurich',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const get=(name)=>Number(parts.find(part=>part.type===name).value);
  const dayNumber=Math.floor(Date.UTC(get('year'),get('month')-1,get('day'))/86400000);
  const selected=slogans[dayNumber%slogans.length];
  document.getElementById('slogan-title').textContent=selected.title;
  document.getElementById('slogan-description').textContent=selected.description;
}
updateSlogan();
setInterval(updateSlogan,60000);
